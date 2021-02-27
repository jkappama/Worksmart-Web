using MongoDB.Driver;
using MongoDBWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using WorkSmart.Models;

namespace WorkSmart.Services
{
    //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
    public class JournalService
    {
        private readonly IMongoCollection<Journal> _journals;
        //Initialize the JournalService by connecting to the Mongo DB
        public JournalService(IWorkSmartDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _journals = database.GetCollection<Journal>(settings.JournalsCollectionName);

        }

        //Get all the Journal objects from Mongo DB and store in a list
        public List<Journal> Get()
        {
            List<Journal> journals;
            journals = _journals.Find(log => true).ToList();
            return journals;
        }

        //Get a specific Journal object from Mongo DB based on ID and return to use
        public Journal Get(string id) =>
            _journals.Find<Journal>(journal => journal.Id == id).FirstOrDefault();

        //Not used (ignore)
        public Journal GetByUsername(string username) =>
            _journals.Find<Journal>(journal => journal.Username == username).FirstOrDefault();

        //Create a new Journal object in the Mongo DB
        public Journal Post(Journal journal)
        {
            _journals.InsertOne(journal);
            return journal;
        }

        //Not used (ignore)
        public void Put(Journal journal) =>
            _journals.ReplaceOne(jrnl => jrnl.Id == journal.Id, journal);

        //Delete an existing Journal from the Mongo DB
        public void Delete(string id) =>
            _journals.DeleteOne(jrnl => jrnl.Id == id);

    }
}