using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using System.Net;
using Newtonsoft.Json.Linq;

namespace Osu.Candy.APIv2
{
    public abstract class Request
    {
        protected const string BaseURL = "https://osu.ppy.sh/api/v2";
        private enum RequestType
        {
            Get,
            Post,
            Put,
            Delete,
        }

        private static async Task<Res> HTTPRequest<Res>(string url, RequestType type) 
        {
            var webRequest = WebRequest.Create(url);
            webRequest.Method = type.ToString();

            var response = await webRequest.GetResponseAsync();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            Res data = JsonSerializer.Deserialize<Res>(reader.ReadToEnd());

            reader.Close();
            dataStream.Close();
            response.Close();

            return data;
        }

        protected static async Task<Res> Get<Res>(string url) 
        {
            return await HTTPRequest<Res>(url, RequestType.Get);
        }

        protected static async Task<Res> Post<Res>(string url) 
        {
            return await HTTPRequest<Res>(url, RequestType.Post);
        }

        protected static async Task<Res> Put<Res>(string url) 
        {
            return await HTTPRequest<Res>(url, RequestType.Put);
        }

        protected static async Task<Res> Delete<Res>(string url) 
        {
            return await HTTPRequest<Res>(url, RequestType.Delete);
        }
    }
}
