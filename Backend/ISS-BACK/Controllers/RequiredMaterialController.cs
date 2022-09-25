using ISS_BACK.Configuration;
using ISS_BACK.DTO;
using ISS_BACK.Model;
using ISS_BACK.Service;
using Microsoft.AspNetCore.Mvc;
using System;
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
    public class RequiredMaterialController : BaseController<RequairedMaterial>
    { 
            private IRequiredMaterialService materialService;
            public RequiredMaterialController(ProjectConfiguration projectConfiguration,
                IRequiredMaterialService materialService) : base(projectConfiguration, null)
            {
                this.materialService = materialService;
            }

            [HttpGet("allByApp/{id}")]
            public virtual IActionResult GetAllByProduct(long id)
            {
                return Ok(materialService.GetAllByAppointment(id));
            }
           
            [HttpPost("add")]
            public virtual IActionResult AddEquipment(RequairedMaterialDTO dto)
            {
                return Ok(materialService.AddMaterial(dto));
            }
        }
    
}
