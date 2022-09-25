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
        [HttpPut("finish/{id}")]
        public IActionResult Finish(long id)
        {

            bool response = opticianAppointmentService.Finish(id);

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

        [HttpGet("allPrevious")]
        public virtual IActionResult GetAllPrevious(string term)
        {
            return Ok(opticianAppointmentService.GetAllPrevious(term));
        }


        [HttpGet("allToday")]
        public virtual IActionResult GetAllToday(string term)
        {
            return Ok(opticianAppointmentService.GetAllToday(term));
        }

        [HttpGet("allFuture")]
        public virtual IActionResult GetAllFuture(string term)
        {
            return Ok(opticianAppointmentService.GetAllFuture(term));
        }
        [HttpGet("allPreviousByOptician/{id}")]
        public virtual IActionResult GetAllPreviousByOptician(string term, long id)
        {
            return Ok(opticianAppointmentService.GetAllPreviousByOptician(term, id));
        }


        [HttpGet("allTodayByOptician/{id}")]
        public virtual IActionResult GetAllTodayByOptician(string term, long id)
        {
            return Ok(opticianAppointmentService.GetAllTodayByOptician(term, id));
        }

        [HttpGet("allFutureByOptician/{id}")]
        public virtual IActionResult GetAllFutureByOptician(string term, long id)
        {
            return Ok(opticianAppointmentService.GetAllFutureByOptician(term, id));
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
