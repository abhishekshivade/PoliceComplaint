using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlinePoliceManagement.Models;

public class AdminLoginController : ControllerBase
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AdminLoginController(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] Admin login)
    {
        const string staticEmail = "admin@gmail.com";
        const string staticPassword = "admin@123";

        if (login.Email == staticEmail && login.Password == staticPassword)
        {
            _httpContextAccessor.HttpContext.Session.SetString("isAdmin", "true");
            return Ok(new { isAdmin = true });
        }

        return Unauthorized();
    }
}
