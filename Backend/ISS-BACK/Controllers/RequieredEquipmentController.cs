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
    public class RequieredEquipmentController : BaseController<RequiredEquipment>
    {
        private IRequiredEquipmentService equipmentService;

        public RequieredEquipmentController(ProjectConfiguration projectConfiguration,
            IRequiredEquipmentService equipmentService) : base(projectConfiguration, null)
        {
            this.equipmentService = equipmentService;
        }

        [HttpGet("allByProduct/{id}")]
        public virtual IActionResult GetAllByProduct(long id)
        {
            return Ok(equipmentService.GetAllByProduct(id));
        }
        [HttpGet("allByEquipment/{id}")]
        public virtual IActionResult GetAllByEquipment(long id)
        {
            return Ok(equipmentService.GetAllByEquipment(id));
        }

        [HttpPost("add/{productId}/{equipmentId}")]
        public virtual IActionResult AddEquipment(RequiredEquipment requiredEquipment, long productId, int equipmentId)
        {
            return Ok(equipmentService.AddRequiredEquipment(requiredEquipment, productId, equipmentId));
        }
    }
}
