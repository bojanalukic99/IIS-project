using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Model
{
    public class WorkingHour : Entity
    {
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public WeekDays WeekDays { get; set; }

        public DateTime Date { get; set; }

        public User Optician { get; set; }
    }
}
