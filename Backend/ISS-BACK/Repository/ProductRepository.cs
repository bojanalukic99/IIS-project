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
        public IEnumerable<Product> GetSunglasses(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.Sunglasses).ToList();
            }

            return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.Sunglasses && (x.Name.Contains(term))).ToList();
        }

        public Product GetById(int id) {
            return ApplicationContext.Products.Where(x => x.Id == id).SingleOrDefault();

        }

        public IEnumerable<Product> GetFrames(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.GlassesFrame).ToList();
            }

            return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.GlassesFrame && (x.Name.Contains(term))).ToList();
        }

        public IEnumerable<Product> GetSoft(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.SoftContactLens).ToList();
            }

            return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.SoftContactLens && (x.Name.Contains(term))).ToList();
        }

        public IEnumerable<Product> GetHard(string term)
        {
            if (term is null || term == string.Empty)
            {
                return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.HardContactLens).ToList();
            }

            return ApplicationContext.Products.Where(x => !x.Deleted && x.ProductType == productType.HardContactLens && (x.Name.Contains(term))).ToList();
        }
    }
}
