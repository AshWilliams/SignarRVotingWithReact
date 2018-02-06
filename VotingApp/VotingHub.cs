using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace VotingApp
{
    public class VotingHub : Hub
    {

        private static Dictionary<string, int> poll = new Dictionary<string, int>(){
             {"Apples",10 },
             {"Oranges",10},
             {"Bananas",10},
             {"Blueberries",10},
             {"mangoes",10},
        };

        public static Dictionary<string, int> Poll { get => poll; set => poll = value; }

        public void Send(string name)
        {
            Poll[name]++;
            string data = JsonConvert.SerializeObject(Poll.Select(x => new { name = x.Key, count = x.Value }).ToList());


            Clients.All.showLiveResult(data);
        }
    }

}