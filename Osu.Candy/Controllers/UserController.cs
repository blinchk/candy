using Microsoft.AspNetCore.Mvc;
using Osu.Candy.Models;

namespace Osu.Candy.Controllers
{
    public class UserController : Controller
    {
        // GETs
        [Route("user")]
        public User Index(int id)
        {
            return new User(id);
        }
    }
}