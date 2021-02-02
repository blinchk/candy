using System.Collections.Generic;
using System.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Osu.Candy.Models;

namespace Osu.Candy.Controllers
{
    public class ProfileController : Controller
    {
        [Route("api/profile")]
        public Task<string> Index(int id)
        {
            var user = new User(id);
            return user.Request();
        }
    }
}