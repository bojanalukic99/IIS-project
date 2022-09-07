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
    public class PriceListController : BaseController<PriceList>
    {
        private IPriceListService priceListService;

        public PriceListController(ProjectConfiguration projectConfiguration, IPriceListService priceListService) : base(projectConfiguration, null) {
            this.priceListService = priceListService;
        }

        [HttpGet("all")]
        public virtual IActionResult GetAll()
        {
            return Ok(priceListService.GetAll());
        }
    }   
}
