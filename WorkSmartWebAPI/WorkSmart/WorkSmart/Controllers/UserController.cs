using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDBWebAPI.Models;
using WorkSmart.Services;
using WorkSmart.Models;

namespace WorkSmart.Controllers
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    //Not used in the application (ignore)
    [Route("api/Users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get() =>
            _userService.Get();

        [HttpGet("{id:length(24)}", Name = "GetUsers")]
        public ActionResult<User> Get(string id)
        {
            var usr = _userService.Get(id);

            if (usr == null)
            {
                return NotFound();
            }

            return usr;
        }

        [HttpGet("{username}/{password}", Name = "GetUserByUNPW")]
        public ActionResult<User> Get(string username, string password)
        {
            var usr = _userService.Get(username, password);

            if (usr == null)
            {
                return NotFound();
            }

            return usr;
        }

        [HttpPost]
        public ActionResult<User> Post(User user)
        {
            _userService.Post(user);

            return user;
        }

        [HttpPut]
        public ActionResult Put(User user)
        {
            _userService.Put(user);
            return Ok();
        }

        [HttpDelete("{id:length(24)}", Name = "DeleteUser")]
        public ActionResult Delete(string id)
        {
            _userService.Delete(id);
            return Ok();
        }

    }
}
