using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class AppForEquipment : Entity
    {
        public DateTime Date { get; set; }
        public int StartTimeHoure { get; set; }
        public int StartTimeMinute { get; set; }

        public int Duration { get; set; }
        public User Optician { get; set; }
        public Equipment Equipment { get; set; }
    }
}
