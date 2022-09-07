using ISS_BACK.Configuration;
using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class ProductService : BaseService<Product>, IProductService
    {
        private readonly ILogger _logger;
        private readonly ProjectConfiguration _configuration;

        public ProductService(ILogger<ProductService> logger, ProjectConfiguration projectConfiguration) {

            _configuration = projectConfiguration;
            _logger = logger;
        }


        public Product AddProduct(Product entity)
        {
            if (entity == null)
            {
                return null;
            }
            Product product = new Product();
            PriceList priceList = new PriceList();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                product.Name = entity.Name;
                product.MakingTime= entity.MakingTime;
                product.Price = entity.Price;
                unitOfWork.Products.Add(product);
                _ = unitOfWork.Complete();


                
                priceList.Product = unitOfWork.Products.Get(product.Id);
                priceList.Price = product.Price;
                priceList.Date = DateTime.Now;
                unitOfWork.PriceLists.Add(priceList);
                _ = unitOfWork.Complete();


                return entity;

            }



            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }


        public IEnumerable<Product> GetAll(string term)
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.Products.GetAll(term);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<Product>();
            }
        }

        public Product GetById(int id) {
            using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
            return unitOfWord.Products.Get(id);

        }

        public bool Update(long id, Product product)
        {

            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());

                Product productDB = Get(id);

                productDB.Name = product.Name;
                productDB.MakingTime= product.MakingTime;
                productDB.Price = product.Price;

                unitOfWork.Products.Update(productDB);
                _ = unitOfWork.Complete();




                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }

}
