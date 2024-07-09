using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlinePoliceManagement.Models;

namespace OnlinePoliceManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegistrationsController : ControllerBase
    {
        private readonly DotNetMiniContext _context;

        public UserRegistrationsController(DotNetMiniContext context)
        {
            _context = context;
        }

        // GET: api/UserRegistrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRegistration>>> GetUserRegistrations()
        {
            return await _context.UserRegistrations.ToListAsync();
        }

        // GET: api/UserRegistrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRegistration>> GetUserRegistration(int id)
        {
            var userRegistration = await _context.UserRegistrations.FindAsync(id);

            if (userRegistration == null)
            {
                return NotFound();
            }

            return userRegistration;
        }

        // PUT: api/UserRegistrations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /* [HttpPut("{id}")]
         public async Task<IActionResult> PutUserRegistration(int id, UserRegistration userRegistration)
         {
             if (id != userRegistration.UserId)
             {
                 return BadRequest();
             }

             _context.Entry(userRegistration).State = EntityState.Modified;

             try
             {
                 await _context.SaveChangesAsync();
             }
             catch (DbUpdateConcurrencyException)
             {
                 if (!UserRegistrationExists(id))
                 {
                     return NotFound();
                 }
                 else
                 {
                     throw;
                 }
             }

             return NoContent();
         }
        */

        // POST: api/UserRegistrations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserRegistration>> PostUserRegistration(UserRegistration userRegistration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UserRegistrations.Add(userRegistration);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserRegistrationExists(userRegistration.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserRegistration", new { id = userRegistration.UserId }, userRegistration);
        }


        // DELETE: api/UserRegistrations/5
        /*[HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserRegistration(int id)
        {
            var userRegistration = await _context.UserRegistrations.FindAsync(id);
            if (userRegistration == null)
            {
                return NotFound();
            }

            _context.UserRegistrations.Remove(userRegistration);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        */
        private bool UserRegistrationExists(int id)
        {
            return _context.UserRegistrations.Any(e => e.UserId == id);
        }
    }
}
