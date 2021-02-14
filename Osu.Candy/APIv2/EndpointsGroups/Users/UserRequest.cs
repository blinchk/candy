using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using Newtonsoft.Json.Linq;
using Osu.Candy.APIv2;
using Osu.Candy.GameInfo;

namespace Osu.Candy.APIv2.EndpointsGroups.Users
{
    public class UserRequest : Request
    {
        public interface IUserData
        {
            string CoverUrl {get; set;}
            string Discord {get; set;}
            GameModes GameMode {get; set;}
        }
        public static async Task<IUserData> GetUser(GameModes? mode = 0) 
        {
            IUserData data = await Get<IUserData>($@"${BaseURL}/me/");
            return data;
        }
    }
}