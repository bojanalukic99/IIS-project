﻿using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public class WorkinHourRepository :  BaseRepository<WorkingHour> ,IWorkingHourRepository
    {
        public WorkinHourRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<WorkingHour> GetAllByOptician(int id)
        {
            return ApplicationContext.WorkingHours.Where(x => !x.Deleted && x.Optician.Id == id).ToList();
        }

        public WorkingHour GetByDate(DateTime dateTime) {
            return ApplicationContext.WorkingHours.Where(x => x.Date.Year == dateTime.Year && x.Date.Month == dateTime.Month && x.Date.Day == dateTime.Day).SingleOrDefault();
        }
    }
}
