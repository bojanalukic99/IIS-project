using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceEmail
{
    public interface IEmailSender
    {
        void SendEmail(Message message);
    }

}
