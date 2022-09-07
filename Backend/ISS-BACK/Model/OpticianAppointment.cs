using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class OpticianAppointment : Entity
    {
        public User Optician { get; set; }
       
        public DateTime Date { get; set; }
        public bool IsScheduled { get; set; } 
        public Product Product { get; set; }
    }
}
