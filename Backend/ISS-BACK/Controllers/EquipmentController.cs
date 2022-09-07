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
    public class EquipmentController : BaseController<Equipment>
    {
        private IEquipmentService equipmentService;

        public EquipmentController(ProjectConfiguration projectConfiguration,
            IEquipmentService equipmentService) : base(projectConfiguration, null) {
            this.equipmentService = equipmentService;
        }
        [HttpPut("edit/{id}")]
        public override IActionResult Update(int id, Equipment entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = equipmentService.Update(id, entity);

            return Ok(response);
        }
        [HttpGet("all")]
        public virtual IActionResult GetAll([FromQuery(Name = "term")] string term)
        {
            return Ok(equipmentService.GetAll(term));
        }

        [HttpPost("add")]
        public virtual IActionResult AddEquipment(Equipment equipment)
        {
            return Ok(equipmentService.AddEquipment(equipment));
        }

        [HttpGet("getById/{id}")]
        public virtual IActionResult GetById(long id)
        {
            return Ok(equipmentService.GetById(id));
        }
    }
}
