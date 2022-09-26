using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class Material : Entity
    {
        public string Name { get; set; }
        public int Quatity { get; set; }
        public string Manufacturer { get; set; }
        public string UnitOfMeasure { get; set; }
    }
}
