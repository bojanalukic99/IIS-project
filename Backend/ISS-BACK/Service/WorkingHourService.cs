using ISS_BACK.Configuration;
using ISS_BACK.Model;
using ISS_BACK.Repository;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class WorkingHourService : BaseService<WorkingHour>, IWorkingHourService
    {
        private readonly ProjectConfiguration projectConfiguration;
        public WorkingHourService(ProjectConfiguration projectConfiguration,ILogger<ProductService> logger)
        {
            _logger = logger;
            _configuration = projectConfiguration;
        }

     
        public async Task<WorkingHour> AddWorkingHou(WorkingHour entity)
        {
            if (entity == null)
            {
                return null;
            }
            WorkingHour workingHour = new WorkingHour();
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
                workingHour.StartTime= entity.StartTime;
                workingHour.EndTime= entity.EndTime;
                workingHour.Date = entity.Date;
                workingHour.Optician = unitOfWork.Users.Get(entity.Optician.Id);

                string json = JsonConvert.SerializeObject(workingHour);



                unitOfWork.WorkingHours.Add(workingHour);
                _ = unitOfWork.Complete();


                return workingHour;

            }
            catch (Exception e)
            {
                _logger.LogError($"Error in NaterialService in AddMaterial {e.Message} {e.StackTrace}");
                return null;
            }
        }

        public IEnumerable<WorkingHour> GetAllByOptician(int id)
        {
            try
            {
                using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());


                return unitOfWork.WorkingHours.GetAllByOptician(id);
            }
            catch (Exception e)
            {
                return new List<WorkingHour>();
            }
        }

        public WorkingHour GetByDate(DateTime dateTime) {
            using UnitOfWork unitOfWork = new UnitOfWork(new ApplicationContext());
            return unitOfWork.WorkingHours.GetByDate(dateTime);
        }
    }
}
