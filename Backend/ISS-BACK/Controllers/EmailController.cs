using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServiceEmail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailSender _emailSender;
        private readonly ILogger<EmailController> _logger;

        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpGet("sendEmail")]
        public bool SendEmail()
        {

            var message = new Message(new string[] { "lukicb99@gmail.com" }, "Notification", "Your product is ready for pick up!");
            _emailSender.SendEmail(message);
            return true;
        }
    }
}
