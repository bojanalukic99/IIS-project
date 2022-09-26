using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IAppForEquipmentRepository : IBaseRepository<AppForEquipment>
    {
        IEnumerable<AppForEquipment> GetAllByEquipment(long id);
        IEnumerable<AppForEquipment> GetAllByProduct(long id);
    }
}
