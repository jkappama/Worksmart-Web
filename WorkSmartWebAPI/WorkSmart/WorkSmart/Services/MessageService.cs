using MongoDB.Driver;
using MongoDBWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using WorkSmart.Models;

namespace WorkSmart.Services
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    public class MessageService
    {
        private readonly IMongoCollection<WorkSmart.Models.Message> _Messages;
        //Connect to the Message collection in Mongo DB
        public MessageService(IWorkSmartDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Messages = database.GetCollection<WorkSmart.Models.Message>(settings.MessagesCollectionName);

        }

        //Get all the Message objects and return as a list
        public List<WorkSmart.Models.Message> Get()
        {
            List<WorkSmart.Models.Message> messages;
            messages = _Messages.Find(log => true).ToList();
            return messages;
        }

        //Get a single Message object by ID
        public WorkSmart.Models.Message Get(string id) =>
            _Messages.Find<WorkSmart.Models.Message>(log => log.Id == id).FirstOrDefault();

        //Not used (ignore)
        public WorkSmart.Models.Message GetByUsername(string username) =>
            _Messages.Find<WorkSmart.Models.Message>(log => log.Username == username).FirstOrDefault();

        //Create a new Message object
        public Message Post(Message message)
        {
            _Messages.InsertOne(message);
            return message;
        }

        //Not used (ignore)
        public void Put(Message message) =>
            _Messages.ReplaceOne(msg => msg.Id == message.Id, message);

        //Delete the Message object based on ID
        public void Delete(string id) =>
            _Messages.DeleteOne(msg => msg.Id == id);

    }
}