using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ReactASPCrud.Models;
using ReactASPCrud.Services;

namespace ReactASPCrud.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    public class UsersController : ControllerBase
    {
        private readonly UserService userService;
        public UsersController(UserService userService)
        {
            this.userService = userService;
        }
        //GET api/users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userService.getAll();
        }
        //GET api/users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(userService.getById(id));
        }
        //POST api/users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            return CreatedAtAction("Get", new { id = user.id }, userService.Create(user));
        }
        //PUT api/users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User user)
        {
            userService.Update(id, user);
            return NoContent();
        }
        //DELETE api/users/5
        [HttpDelete("{0}")]
        public async Task<IActionResult> Delete(int id)
        {
            userService.Delete(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
