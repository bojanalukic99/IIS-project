using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class AppForEquipmentRepository : BaseRepository<AppForEquipment>, IAppForEquipmentRepository
    {
        public AppForEquipmentRepository(ApplicationContext context) : base(context)
        {



        }
        public IEnumerable<AppForEquipment> GetAllByEquipment(long id)
        {
            return ApplicationContext.AppForEquipments.Include(x => x.Equipment).Include(x => x.Optician).Where(x => !x.Deleted && x.Equipment.Id == id).ToList();
        }

        public IEnumerable<AppForEquipment> GetAllByProduct(long id)
        {
            return ApplicationContext.AppForEquipments.Include(x => x.Equipment).Include(x => x.Optician).Where(x => !x.Deleted ).ToList();
        }
    }
}
