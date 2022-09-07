using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class EquipmentAppointmentRepository : BaseRepository<EquipmentAppointment>, IEquipmentAppointmentRepository
    {
        public EquipmentAppointmentRepository(ApplicationContext context) : base(context) { }



        public IEnumerable<EquipmentAppointment> GetAllByEquipment(Equipment id)
        {
            return ApplicationContext.EquipmentsAppointments.Where(x => !x.Deleted && x.Equipment == id).ToList();
        }

   
    }
}

