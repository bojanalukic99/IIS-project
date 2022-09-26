using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IEquipmentAppointmentRepository : IBaseRepository<EquipmentAppointment>
    {
        IEnumerable<EquipmentAppointment> GetAllByEquipment(Equipment id);
        IEnumerable<EquipmentAppointment> GetAllByProduct(long id);

    }
}
