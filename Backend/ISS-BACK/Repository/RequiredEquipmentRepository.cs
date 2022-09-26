using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class RequiredEquipmentRepository : BaseRepository<RequiredEquipment>, IRequiredEquipmentRepository
    {
        public RequiredEquipmentRepository(ApplicationContext context) : base(context) { }



        public IEnumerable<RequiredEquipment> GetAllByEquipment(long id)
        {
            return ApplicationContext.RequiredEquipments.Include(x => x.Product).Include(x => x.Equipment).Where(x => !x.Deleted && x.Equipment.Id == id).ToList();
        }

        public IEnumerable<RequiredEquipment> GetAllByProduct(long id)
        {
            return ApplicationContext.RequiredEquipments.Include(x => x.Product).Include(x => x.Equipment).Where(x => !x.Deleted && x.Product.Id == id).ToList();
        }

    }
}
