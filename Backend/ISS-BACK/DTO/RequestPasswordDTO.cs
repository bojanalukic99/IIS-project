using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.DTO
{
    public class RequestPasswordDTO
    {
        public string Token { get; set; }
        public string Password { get; set; }
    }
}
