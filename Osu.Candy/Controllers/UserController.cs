using Microsoft.AspNetCore.Mvc;

namespace Osu.Candy.Controllers
{
    public class UserController : Controller
    {
        // GET
        public IActionResult Index(int id)
        {
            return View($"/user/{id}");
        }
    }
}