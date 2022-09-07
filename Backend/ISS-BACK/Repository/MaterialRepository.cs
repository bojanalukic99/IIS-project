using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class MaterialRepository : BaseRepository<Material>, IMaterialRepository
    {
        public MaterialRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<Material> GetAll(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Materials.Where(x => !x.Deleted).ToList();
            }

            return ApplicationContext.Materials.Where(x => !x.Deleted && (x.Name.Contains(term))).ToList();
        }

        public Material GetById(long id)
        {
            return ApplicationContext.Materials.Where(x => x.Id == id).SingleOrDefault();
        }


       
    }
}
