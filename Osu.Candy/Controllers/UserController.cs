using Microsoft.AspNetCore.Mvc;

namespace Osu.Candy.Controllers
{
    public class UserController : Controller
    {
        // GETs
        [Route("profile")]
        public IActionResult Index(int id)
        {
            return View($"/user/{id}");
        }
    }
}