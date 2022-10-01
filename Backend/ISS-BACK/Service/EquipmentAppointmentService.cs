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
        public IEnumerable<AppForEquipment> GetAllByEquipment(long id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.AppForEquipments.GetAllByEquipment(id);
            }
            catch (Exception e)
            {
                return new List<AppForEquipment>();
            }
        }

        public EquipmentAppointment AddAppointment(RequiredEquipment equipment, OpticianAppointment appointment)
        {
            EquipmentAppointment equipmentAppointment = new EquipmentAppointment();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                equipmentAppointment.Duration = equipment.MakingTime;
                equipmentAppointment.Date = appointment.Date;
                equipmentAppointment.StartHoure = appointment.Date.Hour;
                equipmentAppointment.StartMinut = appointment.Date.Minute;
                equipmentAppointment.IsScheduled = true;
                equipmentAppointment.Equipment = equipment;


                unitOfWork.EquipmentAppointments.Add(equipmentAppointment);
                _ = unitOfWork.Complete();


                return equipmentAppointment;
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
                equipmentAppointmentDB.Equipment = appointment.Equipment;
                equipmentAppointmentDB.IsScheduled = appointment.IsScheduled;
                equipmentAppointmentDB.StartHoure = appointment.StartHoure;

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
