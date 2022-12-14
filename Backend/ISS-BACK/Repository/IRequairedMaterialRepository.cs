using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IRequairedMaterialRepository : IBaseRepository<RequairedMaterial>
    {
        IEnumerable<RequairedMaterial> GetAllByAppointment(long id);
    }
}
