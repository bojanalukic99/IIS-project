using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class EquipmentAppointment : Entity
    {
        public User Optician{ get; set; }
        public float Duration { get; set; }
        public DateTime Date { get; set; }
        public float StartTime { get; set; }
        public bool IsScheduled { get; set; }
        public float EndTime { get; set; }
        public Equipment Equipment { get; set; }
        public Product Product { get; set; }

        public OpticianAppointment OpticianAppointment { get; set; }
    }
}
