using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class EquipmentAppointmentService : BaseService<EquipmentAppointment>, IEquipmentAppointmentService
    {
        public EquipmentAppointmentService(ILogger<EquipmentAppointmentService> logger)
        {
            _logger = logger;
        }
        public IEnumerable<EquipmentAppointment> GetAllByEquipment(Equipment id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.EquipmentAppointments.GetAllByEquipment(id);
            }
            catch (Exception e)
            {
                return new List<EquipmentAppointment>();
            }
        }

        public EquipmentAppointment AddAppointment(EquipmentAppointment entity)
        {
            if (entity == null)
            {
                return null;
            }
            EquipmentAppointment equipmentAppointment = new EquipmentAppointment();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                equipmentAppointment.Optician = entity.Optician;
                equipmentAppointment.Duration = entity.Duration;
                equipmentAppointment.Date = entity.Date;
                equipmentAppointment.StartTime = entity.StartTime;
                equipmentAppointment.IsScheduled = entity.IsScheduled;
                equipmentAppointment.EndTime = entity.EndTime;
                equipmentAppointment.Equipment = entity.Equipment;
                equipmentAppointment.Product = entity.Product;


                unitOfWork.EquipmentAppointments.Add(equipmentAppointment);
                _ = unitOfWork.Complete();


                return entity;
            }
            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }


        public bool Update(long id, EquipmentAppointment appointment)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                EquipmentAppointment equipmentAppointmentDB = Get(id);

                equipmentAppointmentDB.Date = appointment.Date;
                equipmentAppointmentDB.Duration = appointment.Duration;
                equipmentAppointmentDB.EndTime = appointment.EndTime;
                equipmentAppointmentDB.Equipment = appointment.Equipment;
                equipmentAppointmentDB.IsScheduled = appointment.IsScheduled;
                equipmentAppointmentDB.Optician = appointment.Optician;
                equipmentAppointmentDB.StartTime = appointment.StartTime;

                unitOfWork.EquipmentAppointments.Update(equipmentAppointmentDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
