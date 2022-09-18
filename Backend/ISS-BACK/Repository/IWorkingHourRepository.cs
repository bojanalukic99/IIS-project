using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IWorkingHourRepository : IBaseRepository<WorkingHour>
    {
        IEnumerable<WorkingHour> GetAllByOptician(int id);

        WorkingHour GetByDate(DateTime date);

        WorkingHour GetById(long id);
    }
}
