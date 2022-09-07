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

            return ApplicationContext.OpticianAppointments.Include(x => x.Product).Include(x => x.Optician).Where(x => !x.Deleted).ToList();
        }

        public OpticianAppointment GetByStartTime(DateTime startTime)
        {
            return ApplicationContext.OpticianAppointments.Where(x => !x.Deleted && x.Date.Year == startTime.Year && x.Date.Day == startTime.Day && x.Date.Hour == startTime.Hour && x.Date.Minute == startTime.Minute).SingleOrDefault();
        }


        public IEnumerable<OpticianAppointment> GetAllByOptician(User id)
        {
            return ApplicationContext.OpticianAppointments.Where(x => !x.Deleted && x.Optician == id).ToList();
        }

        public OpticianAppointment GetById(long id) {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Include(x => x.Product).Where(x => x.Id == id).SingleOrDefault();
        }

        public IEnumerable<OpticianAppointment> GetAllByDate(DateTime dateTime)
        {
            return ApplicationContext.OpticianAppointments.Include(x => x.Optician).Include(x => x.Product).Where(x => x.Date.Year == dateTime.Year && x.Date.Month == dateTime.Month).ToList();
        }
    }
}
