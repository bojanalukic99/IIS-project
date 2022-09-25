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
        public string LensPower { get; set; }
        public string Cylinder { get; set; }

        public string AxisFigure  {get;set;}
        public string AdditionFigure { get; set; }

    }
}
