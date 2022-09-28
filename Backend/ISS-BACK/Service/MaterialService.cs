using ISS_BACK.Configuration;
using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class MaterialService : BaseService<Material>, IMaterialService
    {
        private readonly ProjectConfiguration _projectConfiguration;
        public MaterialService(ProjectConfiguration configuration,ILogger<MaterialService> logger)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public Material AddMaterial(Material entity)
        {
            if (entity == null)
            {
                return null;
            }
            Material material= new Material();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                material.Name = entity.Name;
                material.Quatity = entity.Quatity;
                material.UnitOfMeasure = entity.UnitOfMeasure;
                material.Manufacturer = entity.Manufacturer;
                unitOfWork.Materials.Add(material);
                _ = unitOfWork.Complete();

                return entity;

            }

            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public IEnumerable<Material> GetAll(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.Materials.GetAll(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<Material>();
            }
        }

        public Material GetById(long id)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.Materials.GetById(id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new Material();
            }
        }
        public bool ChangeQuantity(long id, int quantity) {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                Material materialDB = Get(id);

                materialDB.Name = materialDB.Name;

                if (materialDB.Quatity < quantity) {
                    return false;
                }

                materialDB.Quatity = materialDB.Quatity - quantity;

                unitOfWork.Materials.Update(materialDB);
                _ = unitOfWork.Complete();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }
        public bool Update(long id, Material material)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                Material materialDB = Get(id);

                materialDB.Name = material.Name;
                materialDB.Quatity = material.Quatity;

                unitOfWork.Materials.Update(materialDB);
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
