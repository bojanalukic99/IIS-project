using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{ 
   public class EyeDetails : Entity
    {
        public int Diopter { get; set; }
        public int DistanceBetweenPupils { get; set; }
        public int Astigmatism { get; set; }

        public int AdditionForReading { get; set; }

        public string TypeOfGlass { get; set; }
    }
}
