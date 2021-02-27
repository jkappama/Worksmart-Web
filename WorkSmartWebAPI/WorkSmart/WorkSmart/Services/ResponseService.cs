using MongoDB.Driver;
using MongoDBWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using WorkSmart.Models;

namespace WorkSmart.Services
{
    public class ResponseService
    {
        //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
        private readonly IMongoCollection<WorkSmart.Models.Response> _Responses;
        //Get access to the Responses collection in Mongo DB
        public ResponseService(IWorkSmartDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Responses = database.GetCollection<WorkSmart.Models.Response>(settings.ResponsesCollectionName);

        }

        //Get all of the Responses and store in a list of Response objects
        public List<WorkSmart.Models.Response> Get()
        {
            List<WorkSmart.Models.Response> responses;
            responses = _Responses.Find(log => true).ToList();
            return responses;
        }

        //Get a specific Response object by ID
        public WorkSmart.Models.Response Get(string id) =>
            _Responses.Find<WorkSmart.Models.Response>(response => response.Id == id).FirstOrDefault();

        //Not used (ignore)
        public WorkSmart.Models.Response GetByUsername(string username) =>
            _Responses.Find<WorkSmart.Models.Response>(response => response.Username == username).FirstOrDefault();

        //Create a new Response object in the Mongo DB
        public Response Post(Response response)
        {
            _Responses.InsertOne(response);
            return response;
        }

        //Not used (ignore)
        public void Put(Response response) =>
            _Responses.ReplaceOne(rspns => rspns.Id == response.Id, response);

        //Delete a response based on object ID
        public void Delete(string id) =>
            _Responses.DeleteOne(rspns => rspns.Id == id);

    }
}