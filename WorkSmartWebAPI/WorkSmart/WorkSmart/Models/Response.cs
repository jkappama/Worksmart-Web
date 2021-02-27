using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WorkSmart.Models
{
    public class Response
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Username { get; set; }
        public string Date { get; set; }
        public string Type { get; set; }
        public string Occasion { get; set; }
        public string Keywords { get; set; }
        public string ResponseContent { get; set; }
    }
}
