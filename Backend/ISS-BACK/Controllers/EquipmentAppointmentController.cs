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
    public class EquipmentAppointmentController : BaseController<EquipmentAppointment>
    {
        private IEquipmentAppointmentService equipmentAppointmentService;

        public EquipmentAppointmentController(ProjectConfiguration projectConfiguration, IEquipmentAppointmentService equipmentAppointmentService) : base(projectConfiguration, null) {
            this.equipmentAppointmentService = equipmentAppointmentService;
        }
        public override IActionResult Update(int id, EquipmentAppointment entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = equipmentAppointmentService.Update(id, entity);

            return Ok(response);
        }


        [HttpGet("allByEquipment/{id}")]
        public virtual IActionResult GetAllByEquipment(Equipment id)
        {
            return Ok(equipmentAppointmentService.GetAllByEquipment(id));
        }

        [HttpPost("add")]
        public virtual IActionResult AddAppointment(EquipmentAppointment appointment)
        {
            return Ok(equipmentAppointmentService.AddAppointment(appointment));
        }
    }


   
}
