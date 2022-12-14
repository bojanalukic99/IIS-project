using ISS_BACK.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class PriceListRepository : BaseRepository<PriceList>, IPriceListRepository
    {
        public PriceListRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<PriceList> GetAll(string term) {
            if (term is null || term == string.Empty) 
            {
                return ApplicationContext.PriceLists.Include(x => x.Product).Where(x => !x.Deleted ).ToList();

            }
            return ApplicationContext.PriceLists.Include(x => x.Product).Where(x => !x.Deleted && (x.Product.Name.Contains(term))).ToList();
        }
    }
}
