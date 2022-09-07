using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IMaterialService 
    {
        bool Update(long id, Material material);
        IEnumerable<Material> GetAll(string term);

        Material AddMaterial(Material material);

        Material GetById(long id);

        bool ChangeQuantity(long id, int quantity);
    }
}
