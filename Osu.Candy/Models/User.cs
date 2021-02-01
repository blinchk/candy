using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Osu.Candy.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string CountryCode { get; set; }
        public DateTime JoinDate { get; set; }
        public int Rating { get; set; }
        public int PerformancePoints { get; set; }
        public int GlobalRank { get; set; }
        public int CountryRank { get; set; }
        public bool IsActive { get; set; }
        public bool IsOnline { get; set; }
        public bool AvatarUrl { get; set; }
    }
}
