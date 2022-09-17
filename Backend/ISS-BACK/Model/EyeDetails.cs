using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{ 
   public class EyeDetails : Entity
    {
        public string Diopter { get; set; }
        public string Astigmatism { get; set; }

        public string AdditionForReading { get; set; }

    }
}
