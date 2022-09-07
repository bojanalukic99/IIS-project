using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class EquipmentService : BaseService<Equipment>, IEquipmentService
    {
        public EquipmentService(ILogger<EquipmentService> logger)
        {
            _logger = logger;
        }
        public bool Update(long id, Equipment equipment)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                Equipment equipmentDB= Get(id);

               equipmentDB.Name = equipment.Name;
 

                unitOfWork.Equipments.Update(equipmentDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public Equipment AddEquipment(Equipment entity)
        {
            if (entity == null)
            {
                return null;
            }
            Equipment equipment = new Equipment();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                equipment.Name = entity.Name;
                unitOfWork.Equipments.Add(equipment);
                _ = unitOfWork.Complete();


                return entity;

            }



            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public Equipment GetById(long id)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.Equipments.GetById(id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is EquipmentService in GetById {e.Message} {e.StackTrace}");
                return new Equipment();
            }
        }

        public IEnumerable<Equipment> GetAll(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.Equipments.GetAll(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<Equipment>();
            }
        }

       

    }
}
