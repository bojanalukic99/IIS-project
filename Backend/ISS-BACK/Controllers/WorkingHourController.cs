using ISS_BACK.Configuration;
using ISS_BACK.Model;
using ISS_BACK.Service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkingHourController : BaseController<WorkingHour>
    {
        private IWorkingHourService workingHourService;

        public WorkingHourController(ProjectConfiguration projectConfiguration,
            IWorkingHourService workingHourService) : base(projectConfiguration, null)
        {
            this.workingHourService = workingHourService;
        }

        [HttpPost("add")]
        public virtual IActionResult AddWorkingHour(WorkingHour workingHour)
        {
            return Ok(workingHourService.AddWorkingHou(workingHour));
        }

        [HttpGet("getBy/{id}")]
        public virtual IActionResult GetAllByOptician(int id)
        {

            return Ok(workingHourService.GetAllByOptician(id));
        }
        [HttpDelete("delete/{id}")]
        public override IActionResult Delete(int id)
        {
            bool response = _baseService.Delete(id);
            return Ok(response);
        }
        [HttpGet("getById/{id}")]
        public virtual IActionResult GetById(int id)
        {
            return Ok(workingHourService.GetById(id));
        }

        [HttpPut("{id}")]
        public override IActionResult Update(int id, WorkingHour entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = workingHourService.Update(id, entity);

            return Ok(response);
        }
    }
}
