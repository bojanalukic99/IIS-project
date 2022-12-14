using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IPriceListRepository : IBaseRepository<PriceList>
    {
        IEnumerable<PriceList> GetAll(string term);
    }
}
