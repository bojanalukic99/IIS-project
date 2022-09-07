using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ISS_BACK.Service
{
    public class EmailService : IEmailService
    {
        public Task Send(string toAddress, string subject = "", string body = "", string toBcc = "", List<Attachment> attachments = null)
        {
            throw new NotImplementedException();
        }

        public Task Send(List<string> toAddress, string subject = "", string body = "", string toCC = "", List<Attachment> attachments = null)
        {
            throw new NotImplementedException();
        }

        public Task Send(List<string> toAddress, string subject = "", string body = "", List<string> toCCList = null, string toBcc = "", List<Attachment> attachments = null)
        {
            throw new NotImplementedException();
        }

        public Task Send(List<string> toAddress, string subject = "", string body = "", List<string> toCCList = null, List<string> toBccList = null, List<Attachment> attachments = null)
        {
            throw new NotImplementedException();
        }
    }
}
