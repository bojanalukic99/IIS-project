using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class RequiredEquipment : Entity 
    {
        public Product Product { get; set; }
        public Equipment Equipment { get; set; }
        public int MakingTime { get; set; }
    }
}
