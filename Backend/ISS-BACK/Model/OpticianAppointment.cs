using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class OpticianAppointment : Entity
    {
        public User Optician { get; set; }
        public string PatientName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime Date { get; set; }
        public bool IsScheduled { get; set; } 
        public Product Product { get; set; }
        public EyeDetails LeftEye { get; set; }
        public EyeDetails RightEye { get; set; }
        public string Comment { get; set; }
  
        public string TypeOfGlass { get; set; }
        public string DistanceBetweenPupils { get; set; }
    }
}
