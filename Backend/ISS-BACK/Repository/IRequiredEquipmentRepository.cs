using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IRequiredEquipmentRepository : IBaseRepository<RequiredEquipment>
    {
        IEnumerable<RequiredEquipment> GetAllByEquipment(long id);
        IEnumerable<RequiredEquipment> GetAllByProduct(long id);
    }
}
