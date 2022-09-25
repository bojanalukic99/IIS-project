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

        public string LensPowerLeft { get; set; }
        public string AxisFigureLeft { get; set; }
        public string AdditionFigureLeft { get; set; }
        public string CylinderLeft { get; set; }

        public string LensPowerRight { get; set; }
        public string AxisFigureRight { get; set; }
        public string AdditionFigureRight { get; set; }
        public string CylinderRight { get; set; }

        public string LensColor { get; set; }
        public long OpticianId { get; set; }
    }
}
