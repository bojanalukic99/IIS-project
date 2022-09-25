using ISS_BACK.DTO;
using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IRequiredMaterialService : IBaseService<RequairedMaterial>
    {
        IEnumerable<RequairedMaterial> GetAllByAppointment(long id);
        RequairedMaterial AddMaterial(RequairedMaterialDTO entity);
    }
}
