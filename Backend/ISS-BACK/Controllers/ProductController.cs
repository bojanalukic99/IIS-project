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
    public class ProductController : BaseController<Product>
    {
        private IProductService productService;

        public ProductController(ProjectConfiguration projectConfiguration,
            IProductService productService) : base(projectConfiguration, null)
        {
            this.productService = productService;
        }

        [HttpPut("{id}")]
        public override IActionResult Update(int id, Product entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = productService.Update(id, entity);

            return Ok(response);
        }

        [HttpPost("add")]
        public virtual IActionResult AddProduct(Product product)
        {
            return Ok(productService.AddProduct(product));
        }

        [HttpGet("all")]
        public virtual IActionResult GetAll([FromQuery(Name = "term")] string term)
        {
            return Ok(productService.GetAll(term));
        }

        [HttpGet("getById/{id}")]
        public virtual IActionResult GetById(int id)
        {
            return Ok(productService.GetById(id));
        }
    }


    
}
