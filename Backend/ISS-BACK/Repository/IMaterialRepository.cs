using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IMaterialRepository : IBaseRepository<Material>
    {
        IEnumerable<Material> GetAll(string term);

        Material GetById(long id);

    }
}
