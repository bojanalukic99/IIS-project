using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IRequiredEquipmentService
    {
        IEnumerable<RequiredEquipment> GetAllByEquipment(long id);
        IEnumerable<RequiredEquipment> GetAllByProduct(long id);

        RequiredEquipment AddRequiredEquipment(RequiredEquipment requiredEquipment, long productId, int equipmentId);
    }
}
