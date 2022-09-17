using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.DTO
{
    public class OpticianAppointmentDTO
    {
        public DateTime Date { get; set; }
        public long ProductId { get; set; }

        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string DiopterLeft { get; set; }
        public string DiopterRight { get; set; }
        public string AstigmatismLeft { get; set; }
        public string AstigmatismRight { get; set; }
        public string AdditionForReadingLeft { get; set; }
        public string AdditionForReadingRight { get; set; }
        public string TypeOfGlass { get; set; }
        public string DistanceBetweenPupils { get; set; }

        public long OpticianId { get; set; }
    }
}
