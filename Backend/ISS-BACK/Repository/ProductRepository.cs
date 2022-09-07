using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationContext context) : base(context) {
        
        
        }

        public IEnumerable<Product> GetAll(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Products.Where(x => !x.Deleted).ToList();
            }

            return ApplicationContext.Products.Where(x => !x.Deleted && (x.Name.Contains(term))).ToList();
        }

        public Product GetById(int id) {
            return ApplicationContext.Products.Where(x => x.Id == id).SingleOrDefault();

        }

    }
}
