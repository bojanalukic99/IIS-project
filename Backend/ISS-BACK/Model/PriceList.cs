using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class PriceList : Entity
    {
        public Product Product { get; set; }
        public string Price { get; set; }
        public DateTime Date { get; set; }
    }
}
