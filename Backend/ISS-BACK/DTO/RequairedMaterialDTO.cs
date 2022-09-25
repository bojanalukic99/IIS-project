using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.DTO
{
    public class RequairedMaterialDTO
    {
        public long MaterialId { get; set; }
        public long AppointmentId { get; set; }
        public int Quatity { get; set; }
    }
}
