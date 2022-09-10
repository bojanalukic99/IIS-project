using ISS_BACK.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class EquipmentRepository : BaseRepository<Equipment>, IEquipmentRepository
    {
        public EquipmentRepository(ApplicationContext context) : base(context) {
        
        

        }

        public IEnumerable<Equipment> GetAll(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Equipments.Where(x => !x.Deleted).ToList();
            }

            return ApplicationContext.Equipments.Where(x => !x.Deleted && (x.Name.Contains(term))).ToList();
        }

        public Equipment GetById(long id)
        {
            return ApplicationContext.Equipments.Where(x => x.Id == id).SingleOrDefault();
        }
    }
}
