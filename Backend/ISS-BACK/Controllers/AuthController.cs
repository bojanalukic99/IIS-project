using ISS_BACK.Configuration;
using ISS_BACK.DTO;
using ISS_BACK.Model;
using ISS_BACK.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
namespace ISS_BACK.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : BaseController<User>
    {
        private readonly IUserService _userService;
        private readonly ProjectConfiguration _configuration;

        public AuthController(ProjectConfiguration configuration, IUserService userService) : base(configuration, userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login(LoginDTO login)
        {
            if (login.ClientId != _configuration.ClientID || login.ClientSecret != _configuration.CLientSecret)
            {
                return BadRequest("ClientID or ClientSecret was not correct. please check again");
            }

            if (login == null || login.Email == null || login.Password == null)
            {
                return BadRequest("Invalid client request");
            }

            User user = _userService.GetUserWithEmail(login.Email);

            if (user == null || !user.Enabled || !BCrypt.Net.BCrypt.Verify(login.Password, user.Password))

            {
                return BadRequest("Invalid credentials");
            }

            Claim[] claims = new[]
            {
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub, _configuration.Jwt.Subject),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("Id", user.Id.ToString()),
                    new Claim("Email", user.Email),
                };

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.Jwt.Key));

            SigningCredentials signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(_configuration.Jwt.Issuer, _configuration.Jwt.Audience, claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

            return Ok(new { Token = new JwtSecurityTokenHandler().WriteToken(token) });
        }

    }
}
