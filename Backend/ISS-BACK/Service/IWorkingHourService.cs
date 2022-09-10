using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public interface IWorkingHourService 
    {
        IEnumerable<WorkingHour> GetAllByOptician(int id);

        IEnumerable<WorkingHour> GetAll();

        public Task<WorkingHour> AddWorkingHou(WorkingHour workingHour);

        WorkingHour GetByDate(DateTime date);

    }
}
