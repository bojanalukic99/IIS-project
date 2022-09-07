using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IOpticianAppointmentService
    {
        IEnumerable<OpticianAppointment> GetAllByOptician(User id);

        bool Update(long id, OpticianAppointment appointment);

        OpticianAppointment AddOpticianAppointment(DateTime date, long productId);

        IEnumerable<OpticianAppointment> GetAll(string term);

        IEnumerable<OpticianAppointment> GetFreeApointments(DateTime inputDate, long productId);

        OpticianAppointment GetById(long id);

        IEnumerable<OpticianAppointment> GetAllByDate(DateTime date);

    }
}
