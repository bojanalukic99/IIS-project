using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class OpticianAppointmentRepository : BaseRepository<OpticianAppointment>, IOpticianAppointmentRepository
    {
        public OpticianAppointmentRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<OpticianAppointment> GetAll(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllFinished(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.IsScheduled == true && x.IsPickedUp == false).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.IsPickedUp == false && x.IsScheduled == true && (x.PatientName.Contains(term))).ToList();
        }
        public IEnumerable<OpticianAppointment> GetAllPrevious(string term)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Date < today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Date < today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllPreviousByOptician(string term, long id)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date < today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date < today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllToday(string term)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted  && x.Date == today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Date == today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllTodayByOptician(string term, long id)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date == today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date == today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllFuture(string term)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Date > today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Date > today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllFutureByOptician(string term, long id)
        {
            DateTime today = DateTime.Today;

            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date > today).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted && x.Optician.Id == id && x.Date > today || (x.Optician.FirstName.Contains(term)) || (x.Optician.LastName.Contains(term)) || (x.PatientName.Contains(term)) || (x.Phone.Contains(term)) || (x.Email.Contains(term)) || (x.Product.Name.Contains(term)) || (x.Comment.Contains(term))).ToList();
        }

        public OpticianAppointment GetByStartTime(DateTime startTime)
        {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Where(x => !x.Deleted && x.Date.Year == startTime.Year && x.Date.Day == startTime.Day && x.Date.Hour == startTime.Hour && x.Date.Minute == startTime.Minute).SingleOrDefault();
        }


        public IEnumerable<OpticianAppointment> GetAllByOptician(long id)
        {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Include(x => x.Product).Where(x => !x.Deleted && x.Optician.Id == id).ToList();
        }

        public OpticianAppointment GetById(long id) {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Include(x => x.Product).Include(x => x.LeftEye).Include(x => x.RightEye).Where(x => x.Id == id).SingleOrDefault();
        }

        public IEnumerable<OpticianAppointment> GetAllByDate(DateTime dateTime)
        {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Include(x => x.Product).Where(x => x.Date.Year == dateTime.Year && x.Date.Month == dateTime.Month).ToList();
        }

        public IEnumerable<OpticianAppointment> GetTodayByOptician(User id)
        {
            DateTime today = new DateTime();
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Where(x => !x.Deleted && x.Optician == id && x.Date.Year == today.Year && x.Date.Month == today.Month && x.Date.Day==today.Day).ToList();
        }
        public IEnumerable<OpticianAppointment> GetPreviousByOptician(User id)
        {
            DateTime today = new DateTime();
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Where(x => !x.Deleted && x.Optician == id && x.Date <= today).ToList();
        }

        public IEnumerable<OpticianAppointment> GetAllCanceled(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => x.IsCanceled == true ).ToList();
            }

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x =>  x.IsCanceled == false && (x.PatientName.Contains(term))).ToList();
        }
    }
}
