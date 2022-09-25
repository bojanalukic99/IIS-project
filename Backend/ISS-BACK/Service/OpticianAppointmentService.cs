using ISS_BACK.DTO;
using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class OpticianAppointmentService : BaseService<OpticianAppointment>, IOpticianAppointmentService
    {
        IWorkingHourService workingHourService;

        public OpticianAppointmentService(ILogger<OpticianAppointmentService> logger, IWorkingHourService workingHourService)
        {
            this.workingHourService = workingHourService;
            _logger = logger;
        }

        public IEnumerable<OpticianAppointment> GetFreeApointments(DateTime inputDate, long productId)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                List<OpticianAppointment> appointments = new List<OpticianAppointment>();
                DateTime today = new DateTime();
                if (inputDate != null)
                {
                    today = inputDate;
                }
                WorkingHour working = workingHourService.GetByDate(today);

                if (working == null)
                {
                    return this.GetFirstFree(productId);
                }

                int start = Int32.Parse(working.StartTime);
                int end = Int32.Parse(working.EndTime) - 1;

                DateTime startTime = new DateTime(today.Year, today.Month, today.Day, start, 0, 0);
                DateTime endTime = new DateTime(today.Year, today.Month, today.Day, end, 0, 0);
                DateTime currentTime = new DateTime(today.Year, today.Month, today.Day, start, 0, 0);


                Product product = new Product();
                product = unitOfWord.Products.Get(productId);

                while (currentTime <= endTime)
                {
                    OpticianAppointment appointment = unitOfWord.OpticianAppointments.GetByStartTime(currentTime);

                    if (appointment != null)
                    {
                        currentTime = currentTime.AddMinutes(product.MakingTime);
                        continue;
                    }

                    OpticianAppointment newAppointment = new OpticianAppointment();
                    newAppointment.Date = currentTime;
                    newAppointment.Optician = working.Optician;

                    appointments.Add(newAppointment);

                    currentTime = currentTime.AddMinutes(product.MakingTime);

                }

                if (appointments.Count == 0)
                {
                    return this.GetFirstFree(productId);
                }

                return appointments;
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is AppointmentService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetFirstFree(long productId) 
        {
            string term = "";
            using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());

            List<OpticianAppointment> appointments = new List<OpticianAppointment>();

            IEnumerable<WorkingHour> working = workingHourService.GetAll();

            foreach(WorkingHour workingHour in working) 
            {
                DateTime today = DateTime.Today;
                DateTime work = workingHour.Date;

                int start = Int32.Parse(workingHour.StartTime);
                int end = Int32.Parse(workingHour.EndTime) - 1;

                DateTime startTime = new DateTime(work.Year, work.Month, work.Day, start, 0, 0);
                DateTime endTime = new DateTime(work.Year, work.Month, work.Day, end, 0, 0);
                DateTime currentTime = new DateTime(work.Year, work.Month, work.Day, start, 0, 0);


                Product product = new Product();
                product = unitOfWord.Products.Get(productId);

                while (currentTime <= endTime)
                {
                    OpticianAppointment appointment = unitOfWord.OpticianAppointments.GetByStartTime(currentTime);

                    if (appointment != null)
                    {
                        currentTime = currentTime.AddMinutes(product.MakingTime);
                        continue;
                    }

                    OpticianAppointment newAppointment = new OpticianAppointment();
                    newAppointment.Date = currentTime;
                    newAppointment.Optician = workingHour.Optician;

                    if (newAppointment.Date >= today)
                    {
                            appointments.Add(newAppointment); 
                    }

                    currentTime = currentTime.AddMinutes(product.MakingTime);

                }
            }
           
            appointments.OrderBy(x => x.Date);


            return appointments;

        }

        public IEnumerable<OpticianAppointment> GetAllByOptician(long id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.OpticianAppointments.GetAllByOptician(id);
            }
            catch (Exception e)
            {
                return new List<OpticianAppointment>();
            }
        }

        public OpticianAppointment GetById(long id) {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.OpticianAppointments.GetById(id);
            }
            catch (Exception e)
            {
                return new OpticianAppointment();
            }
        }


        public IEnumerable<OpticianAppointment> GetAll(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAll(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public OpticianAppointment AddOpticianAppointment(OpticianAppointmentDTO dto)
        {
             
            OpticianAppointment opticianAppointment= new OpticianAppointment();
            try
            {

                EyeDetails leftEye = new EyeDetails();
                leftEye.Diopter = dto.DiopterLeft;
                leftEye.Astigmatism = dto.AstigmatismLeft;
                leftEye.AdditionForReading = dto.AdditionForReadingLeft;
                leftEye.AxisFigure = dto.AxisFigureLeft;
                leftEye.AdditionFigure = dto.AdditionFigureLeft;
                leftEye.Cylinder = dto.CylinderLeft;
                leftEye.LensPower = dto.LensPowerLeft;

                EyeDetails rightEye = new EyeDetails();
                rightEye.Diopter = dto.DiopterRight;
                rightEye.Astigmatism = dto.AstigmatismRight;
                rightEye.AdditionForReading = dto.AdditionForReadingRight;
                rightEye.AxisFigure = dto.AxisFigureRight;
                rightEye.AdditionFigure = dto.AdditionFigureRight;
                rightEye.Cylinder = dto.CylinderRight;
                rightEye.LensPower = dto.LensPowerRight;

                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
               opticianAppointment.Optician = unitOfWork.Users.Get(dto.OpticianId);
               opticianAppointment.Date = dto.Date;
               opticianAppointment.IsScheduled = false;
               opticianAppointment.Product = unitOfWork.Products.Get(dto.ProductId);
                opticianAppointment.PatientName = dto.Name;
                opticianAppointment.Phone = dto.Phone;
                opticianAppointment.Email = dto.Email;
                opticianAppointment.LeftEye = leftEye;
                opticianAppointment.RightEye = rightEye;
                opticianAppointment.DistanceBetweenPupils = dto.DistanceBetweenPupils;
                opticianAppointment.TypeOfGlass = dto.TypeOfGlass;
                opticianAppointment.LensColor = dto.LensColor;

                unitOfWork.OpticianAppointments.Add(opticianAppointment);
                _ = unitOfWork.Complete();


                return opticianAppointment;
            }
            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public bool Update(long id, OpticianAppointment appointment)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                OpticianAppointment opticianAppointmentDB = Get(id);

                opticianAppointmentDB.Comment = appointment.Comment;

                unitOfWork.OpticianAppointments.Update(opticianAppointmentDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public IEnumerable<OpticianAppointment> GetAllByDate(DateTime date)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.OpticianAppointments.GetAllByDate(date);
            }
            catch (Exception e)
            {
                return new List<OpticianAppointment>();
            }
        }

        public bool AddComment(long id, string comment)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                OpticianAppointment opticianAppointmentDB = Get(id);

                opticianAppointmentDB.Comment = comment;

                unitOfWork.OpticianAppointments.Update(opticianAppointmentDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool Finish(long id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                OpticianAppointment opticianAppointmentDB = Get(id);

                opticianAppointmentDB.IsScheduled = true;

                unitOfWork.OpticianAppointments.Update(opticianAppointmentDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public IEnumerable<OpticianAppointment> GetAllPrevious(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllPrevious(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllToday(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllToday(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllFuture(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllFuture(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllPreviousByOptician(string term, long id)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllPreviousByOptician(term,id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllTodayByOptician(string term, long id)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllTodayByOptician(term, id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllFutureByOptician(string term, long id)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.OpticianAppointments.GetAllFutureByOptician(term, id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }
    }
}
