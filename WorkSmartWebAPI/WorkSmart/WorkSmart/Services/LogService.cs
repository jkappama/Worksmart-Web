using MongoDB.Driver;
using MongoDBWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using WorkSmart.Models;

namespace WorkSmart.Services
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    public class LogService
    {
        private readonly IMongoCollection<Log> _logs;
        //Make the connection to the Mongo DB for the Log collection
        public LogService(IWorkSmartDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _logs = database.GetCollection<Log>(settings.LogsCollectionName);

        }

        //Get all the Logs from the collection
        public List<Log> Get()
        {
            List<Log> logs;
            logs = _logs.Find(log => true).ToList();
            return logs;
        }

        //Get a specific log by id from the collection
        public Log Get(string id) =>
            _logs.Find<Log>(log => log.Id == id).FirstOrDefault();

        //Not used (ignore)
        public Log GetByUsername(string username) =>
            _logs.Find<Log>(log => log.Username == username).FirstOrDefault();

        //Create a new Log based on data passed over
        public Log Post(Log log)
        {
            _logs.InsertOne(log);
            return log;
        }

        //Not used (ignore)
        public void Put(Log log) =>
            _logs.ReplaceOne(lg => lg.Id == log.Id, log);

        //Delete a Log object in the collection based on ID
        public void Delete(string id) =>
            _logs.DeleteOne(lg => lg.Id == id);

    }
}