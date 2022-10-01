using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IEquipmentAppointmentService
    {
        IEnumerable<AppForEquipment> GetAllByEquipment(long id);
        bool Update(long id, EquipmentAppointment appointment);
        EquipmentAppointment AddAppointment(RequiredEquipment equipment, OpticianAppointment opticianAppointment);

    }
}
