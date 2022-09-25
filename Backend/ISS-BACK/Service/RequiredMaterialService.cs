using ISS_BACK.DTO;
using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class RequiredMaterialService : BaseService<RequairedMaterial>, IRequiredMaterialService
    {
        public RequiredMaterialService(ILogger<RequiredMaterialService> logger)
        {
            _logger = logger;
        }

        public  RequairedMaterial AddMaterial(RequairedMaterialDTO entity)
        {
            if (entity == null)
            {
                return null;
            }
            RequairedMaterial requairedMaterial = new RequairedMaterial();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                requairedMaterial.Appointment = unitOfWork.OpticianAppointments.Get(entity.AppointmentId);
                requairedMaterial.Material = unitOfWork.Materials.Get(entity.MaterialId);
                requairedMaterial.Quatity = entity.Quatity;
                unitOfWork.RequairedMaterials.Add(requairedMaterial);
                _ = unitOfWork.Complete();


                return requairedMaterial;

            }

            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public IEnumerable<RequairedMaterial> GetAllByAppointment(long id)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                return unitOfWork.RequairedMaterials.GetAllByAppointment(id);
            }
            catch (Exception e)
            {
                return new List<RequairedMaterial>();
            }
        }
    }
}

