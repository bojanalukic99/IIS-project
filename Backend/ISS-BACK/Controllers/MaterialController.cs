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
    public class MaterialController : BaseController<Material>
    {
        private IMaterialService materialService;

        public MaterialController(ProjectConfiguration projectConfiguration, IMaterialService materialService, IUserService userService) : base(projectConfiguration, null) {
            this.materialService = materialService;
        }

        [HttpGet("all")]
        public virtual IActionResult GetAll([FromQuery(Name = "term")] string term)
        {
            return Ok(materialService.GetAll(term));
        }

        [HttpPut("changeQuantity/{id}/{quantity}")]
        public IActionResult ChangeQuantity(long id, int quantity)
        {
           
            bool response = materialService.ChangeQuantity(id, quantity);

            return Ok(response);
        }

        [HttpGet("getById/{id}")]
        public virtual IActionResult GetById(long id)
        {
            return Ok(materialService.GetById(id));
        }

        [HttpPost("add")]
        public virtual IActionResult AddMaterial(Material material)
        {
            return Ok(materialService.AddMaterial(material));
        }

        [HttpPut("edit/{id}")]
        public override IActionResult Update(int id, Material entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = materialService.Update(id, entity);

            return Ok(response);
        }
    }
}
