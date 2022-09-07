using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class RequiredEquipmentRepository : BaseRepository<RequiredEquipment>, IRequiredEquipmentRepository
    {
        public RequiredEquipmentRepository(ApplicationContext context) : base(context) { }



        public IEnumerable<RequiredEquipment> GetAllByEquipment(Equipment id)
        {
            return ApplicationContext.RequiredEquipments.Where(x => !x.Deleted && x.Equipment == id).ToList();
        }

        public IEnumerable<RequiredEquipment> GetAllByProduct(Product id)
        {
            return ApplicationContext.RequiredEquipments.Where(x => !x.Deleted && x.Product == id).ToList();
        }

    }
}
