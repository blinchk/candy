using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Osu.Candy.Models
{
    public class Chat
    {
        public int TargetId { get; set; }
        public string Message { get; set; }
        public bool Action { get; set; }
    }
}
