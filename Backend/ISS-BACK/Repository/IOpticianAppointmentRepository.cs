﻿using ISS_BACK.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Repository
{
    public interface IOpticianAppointmentRepository : IBaseRepository<OpticianAppointment>
    {
        IEnumerable<OpticianAppointment> GetAllByOptician(long id);
        public IEnumerable<OpticianAppointment> GetTodayByOptician(User id);
            public IEnumerable<OpticianAppointment> GetPreviousByOptician(User id);

        IEnumerable<OpticianAppointment> GetAll(string term);

        OpticianAppointment GetByStartTime(DateTime startTime);

        OpticianAppointment GetById(long id);

        IEnumerable<OpticianAppointment> GetAllByDate(DateTime date);

    }
}
