using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
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
            return ApplicationContext.EquipmentsAppointments.Include(x => x.Equipment).Include(x => x.OpticianAppointment).Where(x => !x.Deleted && x.Equipment.Equipment == id).ToList();
        }
        public IEnumerable<EquipmentAppointment> GetAllByProduct(long id)
        {
            return ApplicationContext.EquipmentsAppointments.Include(x => x.Equipment).Include(x => x.OpticianAppointment).Where(x => !x.Deleted && x.OpticianAppointment.Product.Id == id).ToList();
        }

    }
}

