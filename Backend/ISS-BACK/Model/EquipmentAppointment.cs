using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class EquipmentAppointment : Entity
    {
        public int Duration { get; set; }
        public DateTime Date { get; set; }
        public int StartHoure { get; set; }
        public int StartMinut { get; set; }
        public bool IsScheduled { get; set; }
        public RequiredEquipment Equipment { get; set; }
        public OpticianAppointment OpticianAppointment { get; set; }
    }
}
