using ISS_BACK.DTO;
using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IOpticianAppointmentService
    {
        IEnumerable<OpticianAppointment> GetAllByOptician(long id);

        bool Update(long id, OpticianAppointment appointment);

        OpticianAppointment AddOpticianAppointment(OpticianAppointmentDTO dto);

        IEnumerable<OpticianAppointment> GetAll(string term);
        IEnumerable<OpticianAppointment> GetAllPrevious(string term);

        IEnumerable<OpticianAppointment> GetAllToday(string term);
        IEnumerable<OpticianAppointment> GetAllFuture(string term);

        IEnumerable<OpticianAppointment> GetAllPreviousByOptician(string term, long id);

        IEnumerable<OpticianAppointment> GetAllTodayByOptician(string term, long id);
        IEnumerable<OpticianAppointment> GetAllFutureByOptician(string term, long id);


        IEnumerable<OpticianAppointment> GetFreeApointments(DateTime inputDate, long productId);

        OpticianAppointment GetById(long id);

        IEnumerable<OpticianAppointment> GetAllByDate(DateTime date);

        bool AddComment(long id, string comment);
        bool Finish(long id);

    }
}
