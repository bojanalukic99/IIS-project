using ISS_BACK.Configuration;
using ISS_BACK.Model;
using ISS_BACK.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ISS_BACK.DTO;

namespace ISS_BACK.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : BaseController<User>
    {
        public UserController(ProjectConfiguration projectConfiguration, IUserService userService) : base(projectConfiguration, userService)
        {

        }

        [Authorize]
        [HttpGet]
        public IActionResult GetCurrent()
        {
            return Ok(GetCurrentUser());
        }

        [Route("search")]
        [HttpGet]
        public IActionResult Search(string id)
        {
            return Ok(_userService.Search(id));
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userService.GetAll());
        }


        [Route("allOpticians")]
        [HttpGet]
        public IActionResult GetAllOpticians()
        {
            return Ok(_userService.GetAllOpticians());
        }


        [Route("register")]
        [HttpPost]
        public IActionResult Register(User userData)
        {
            if (userData.Email == null)
            {
                return BadRequest();
            }

            User user = _userService.GetUserWithEmailAndPassword(userData.Email, userData.Password);

            if (user != null)
            {
                return BadRequest("User exists");
            }

            User registeredUser = _userService.Add(userData);

            return Ok(registeredUser);
        }

        [HttpPost]
        public IActionResult CreateUser(User userData)
        {
            if (userData.Email == null || userData.FirstName == null)
            {
                return BadRequest();
            }

            User user = _userService.GetUserWithEmail(userData.Email);

            if (user != null)
            {
                return BadRequest("User exists");
            }

            if (_userService.CreateUser(userData) == null)
            {
                return BadRequest("User not created");
            }
            return Ok();

        }

        [Route("activate/{token}")]
        [HttpPost]
        public IActionResult RequestPasswordReset(string token)
        {

            if (!_userService.Activate(token))
            {
                return BadRequest();
            }
            return Ok();

        }

        [Route("request-password-reset")]
        [HttpPost]
        public IActionResult RequestPasswordReset(RequestEmailDTO request)
        {
            if (request.Email == null || request.Email == string.Empty)
            {
                return BadRequest();
            }

            if (!_userService.RequestPasswordReset(request.Email))
            {
                return BadRequest();
            }
            return Ok();

        }

        [Route("reset-password")]
        [HttpPost]
        public IActionResult ResetPassword(RequestPasswordDTO request)
        {
            if (request.Token == null || request.Token == string.Empty || request.Password == null || request.Password == string.Empty)
            {
                return BadRequest();
            }

            if (!_userService.PasswordReset(request.Token, request.Password))
            {
                return BadRequest("Password not reseted");
            }
            return Ok();
        }


        [Route("change-password")]
        [HttpPost]
        public IActionResult ChangePasswordWithToken(User userData)
        {
            if (userData.RegistrationToken == null || userData.Password == null)
            {
                return BadRequest();
            }

            User user = _userService.GetUserWithRegistrationToken(userData.RegistrationToken);


            if (user == null)
            {
                return BadRequest("User with provided token does not exist");
            }

            if (_userService.ChangePasswordWithToken(userData) == null)
            {
                return BadRequest("Password with token was not changed");
            }
            return Ok();
        }


        [Authorize]
        [Route("get-current-user-data")]
        [HttpGet]
        public IActionResult GetCurrentUserData()
        {
            return Ok(GetCurrentUser());
        }

        [HttpPut("{id}")]
        public override IActionResult Update(int id, User entity)
        {
            if (entity == null)
            {
                return BadRequest();
            }
            bool response = _userService.Update(id, entity);
            return Ok(response);
        }
    }
}
