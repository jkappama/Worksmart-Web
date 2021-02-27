using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkSmart.Services;
using WorkSmart.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkSmart.Models
{
    public class Journal
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Username { get; set; }
        public string Date { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Entry { get; set; }
    }
}
