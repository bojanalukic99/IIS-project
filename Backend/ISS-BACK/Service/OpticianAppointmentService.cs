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
                DateTime today = inputDate;

                WorkingHour working = workingHourService.GetByDate(today);

                
                int start = Int32.Parse(working.StartTime);
                int end = Int32.Parse(working.EndTime)-1;

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

                    appointments.Add(newAppointment);

                    currentTime = currentTime.AddMinutes(product.MakingTime);

                }

                return appointments;
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is AppointmentService in GetAll {e.Message} {e.StackTrace}");
                return new List<OpticianAppointment>();
            }
        }

        public IEnumerable<OpticianAppointment> GetAllByOptician(User id)
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

        public OpticianAppointment AddOpticianAppointment(DateTime date, long productId)
        {
             
            OpticianAppointment opticianAppointment= new OpticianAppointment();
            try
            {


                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
               opticianAppointment.Optician = unitOfWork.Users.Get(1);
               opticianAppointment.Date = date;
               opticianAppointment.IsScheduled = false;
               opticianAppointment.Product = unitOfWork.Products.Get(productId);


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

               opticianAppointmentDB.Date = appointment.Date;
               opticianAppointmentDB.Product = appointment.Product;
               opticianAppointmentDB.IsScheduled = appointment.IsScheduled;
               opticianAppointmentDB.Optician = appointment.Optician;
                
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
    }
}
