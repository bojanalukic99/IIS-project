using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class RequiredEquipmentService : BaseService<RequiredEquipment>, IRequiredEquipmentService
    {
        public RequiredEquipmentService(ILogger<RequiredEquipmentService> logger)
        {
            _logger = logger;
        }

        public RequiredEquipment AddRequiredEquipment(RequiredEquipment entity, long productId, int equipmentId)
        {
            if (entity == null)
            {
                return null;
            }
            RequiredEquipment requiredEquipment = new RequiredEquipment();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                requiredEquipment.Equipment= unitOfWork.Equipments.Get(equipmentId);
                requiredEquipment.Product= unitOfWork.Products.Get(productId);
                requiredEquipment.MakingTime = entity.MakingTime;
                unitOfWork.RequiredEquipments.Add(requiredEquipment);
                _ = unitOfWork.Complete();


                return entity;

            }



            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public IEnumerable<RequiredEquipment> GetAllByEquipment(Equipment id)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.RequiredEquipments.GetAllByEquipment(id);
            }
            catch (Exception e)
            {
                return new List<RequiredEquipment>();
            }
        }

        public IEnumerable<RequiredEquipment> GetAllByProduct(Product id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                return unitOfWork.RequiredEquipments.GetAllByProduct(id);
            }
            catch (Exception e)
            {
                return new List<RequiredEquipment>();
            }
        }
    }
}
