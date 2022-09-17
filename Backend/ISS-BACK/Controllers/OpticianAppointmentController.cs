using ISS_BACK.Configuration;
using ISS_BACK.DTO;
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
    public class OpticianAppointmentController : BaseController<OpticianAppointment>
    {
        private IOpticianAppointmentService opticianAppointmentService;

        public OpticianAppointmentController(ProjectConfiguration projectConfiguration, IOpticianAppointmentService opticianAppointmentService) : base(projectConfiguration, null) {
            this.opticianAppointmentService = opticianAppointmentService;
        }

        [HttpPut("{id}")]
        public override IActionResult Update(int id, OpticianAppointment entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }

            bool response = opticianAppointmentService.Update(id, entity);

            return Ok(response);
        }
        [HttpPut("addComment/{id}/{comment}")]
        public  IActionResult AddComment(long id, string comment)
        {
            if (comment == null)
            {
                comment = " ";
            }

            bool response = opticianAppointmentService.AddComment(id, comment);

            return Ok(response);
        }

        [HttpGet("getFreeApointments/{date}/{productId}")]
        public virtual IActionResult GetFreeApointments(DateTime date, long productId) {
            return Ok(opticianAppointmentService.GetFreeApointments(date, productId));
        }

        [HttpGet("allByOptician/{id}")]
        public virtual IActionResult GetAllByOptician(long id)
        {
            return Ok(opticianAppointmentService.GetAllByOptician(id));
        }


        [HttpGet("getById/{id}")]
        public virtual IActionResult GetById(long id)
        {
            return Ok(opticianAppointmentService.GetById(id));
        }

        [HttpGet("all")]
        public virtual IActionResult GetAll(string term)
        {
            return Ok(opticianAppointmentService.GetAll(term));
        }

        [HttpGet("allByDate/{date}")]
        public virtual IActionResult FetAllByDate(DateTime date)
        {
            return Ok(opticianAppointmentService.GetAllByDate(date));
        }

        [HttpPost("add")]
        public virtual IActionResult AddAppointment(OpticianAppointmentDTO dto)
        {
            return Ok(opticianAppointmentService.AddOpticianAppointment(dto));
        }
        
    }
}
