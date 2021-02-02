using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Osu.Candy.Models
{
    public class User
    {
        public User(int id)
        {
            Id = id;
        }

        public async Task<string> Request()
        {
            var uri = new Uri($@"https://osu.ppy.sh/api/get_user?u={Id}&k=acaf49eee51d326dc4feff407e72892ba124db6b");
            var webRequest = WebRequest.Create(uri);
            webRequest.Method = "GET";
            var response = (HttpWebResponse) await webRequest.GetResponseAsync();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            var data = reader.ReadToEnd();
            reader.Close();
            dataStream.Close();
            response.Close();
            return data;
        }

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
