using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class Product : Entity
    {
        public string Name { get; set; }
        public string Price { get; set; }
        public float MakingTime { get; set; }
        public string Photo { get; set; }
    }
}
