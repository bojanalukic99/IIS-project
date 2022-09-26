using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        IEnumerable<Product> GetAll(string term);
        Product GetById(int id);
        IEnumerable<Product> GetSunglasses(string term);
        IEnumerable<Product> GetFrames(string term);

        IEnumerable<Product> GetSoft(string term);

        IEnumerable<Product> GetHard(string term);

    }
}
