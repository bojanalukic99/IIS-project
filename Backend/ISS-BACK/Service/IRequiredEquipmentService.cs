using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IRequiredEquipmentService
    {
        IEnumerable<RequiredEquipment> GetAllByEquipment(Equipment id);
        IEnumerable<RequiredEquipment> GetAllByProduct(Product id);

        RequiredEquipment AddRequiredEquipment(RequiredEquipment requiredEquipment, long productId, int equipmentId);
    }
}
