using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISS_BACK.Configuration
{
    public class ProjectConfiguration : IProjectConfiguration
    {
        public string FrontendURL { get; set; }
        public string ClientID { get; set; }
        public string CLientSecret { get; set; }
        public DatabaseConfiguration DatabaseConfiguration { get; set; } = new DatabaseConfiguration();
        public EmailSettings EmailSettings { get; set; } = new EmailSettings();
        public Jwt Jwt { get; set; } = new Jwt();
    }

    public class DatabaseConfiguration
    {
        public string ConnectionString { get; set; }
    }

    public class EmailSettings
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public int Port { get; set; }
        public string DisplayName { get; set; }
        public string ServerAddress { get; set; }
        public bool EnableSsl { get; set; }
    }

    public class Jwt
    {
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string Subject { get; set; }
    }
}
