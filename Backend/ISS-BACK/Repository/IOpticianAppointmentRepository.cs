using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IOpticianAppointmentRepository : IBaseRepository<OpticianAppointment>
    {
        IEnumerable<OpticianAppointment> GetAllByOptician(long id);
        public IEnumerable<OpticianAppointment> GetTodayByOptician(User id);
            public IEnumerable<OpticianAppointment> GetPreviousByOptician(User id);
        public IEnumerable<OpticianAppointment> GetAllFinished(string term);

        IEnumerable<OpticianAppointment> GetAll(string term);
        IEnumerable<OpticianAppointment> GetAllPrevious(string term);

        IEnumerable<OpticianAppointment> GetAllToday(string term);
        IEnumerable<OpticianAppointment> GetAllCanceled(string term);


        IEnumerable<OpticianAppointment> GetAllFuture(string term);
        IEnumerable<OpticianAppointment> GetAllPreviousByOptician(string term, long id);

        IEnumerable<OpticianAppointment> GetAllTodayByOptician(string term, long id);

        IEnumerable<OpticianAppointment> GetAllFutureByOptician(string term, long id);


        OpticianAppointment GetByStartTime(DateTime startTime);

        OpticianAppointment GetById(long id);

        IEnumerable<OpticianAppointment> GetAllByDate(DateTime date);


    }
}
