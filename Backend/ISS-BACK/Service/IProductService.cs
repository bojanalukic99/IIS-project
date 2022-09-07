using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IProductService 
    {
        bool Update(long id, Product product);

        Product AddProduct(Product product);

        IEnumerable<Product> GetAll(string term);

        Product GetById(int id);


    }
}
