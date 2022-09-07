using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IRequiredEquipmentRepository : IBaseRepository<RequiredEquipment>
    {
        IEnumerable<RequiredEquipment> GetAllByEquipment(Equipment id);
        IEnumerable<RequiredEquipment> GetAllByProduct(Product id);
    }
}
