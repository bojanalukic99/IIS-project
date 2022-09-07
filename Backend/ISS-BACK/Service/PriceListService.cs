using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class PriceListService : BaseService<PriceList>, IPriceListService
    {
        public PriceListService(ILogger<PriceListService> logger)
        {
            _logger = logger;
        }

        public PriceList Add(long productId, DateTime date)
        {
            PriceList priceList= new PriceList();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                priceList.Product= unitOfWork.Products.Get(productId);
                priceList.Price = priceList.Product.Price;
                priceList.Date = DateTime.Now;
                unitOfWork.PriceLists.Add(priceList);
                _ = unitOfWork.Complete();

                return priceList;

            }

            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public IEnumerable<PriceList> GetAll()
        {
            try
            {
                using UnitOfWork unitOfWord = new UnitOfWork(new ApplicationContext());
                return unitOfWord.PriceLists.GetAll();
            }
            catch (Exception e)
            {
                _logger.LogError($"Error is JobService in GetAll {e.Message} {e.StackTrace}");
                return new List<PriceList>();
            }
        }
    }
}
