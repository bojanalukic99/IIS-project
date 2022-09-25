using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class RequairedMaterial : Entity
    {
        public Material Material { get; set; }
        public OpticianAppointment Appointment { get; set; }
        public int Quatity { get; set; }
    }
}
