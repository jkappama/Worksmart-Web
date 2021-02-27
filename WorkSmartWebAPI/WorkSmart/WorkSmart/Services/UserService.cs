using MongoDB.Driver;
using MongoDBWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using WorkSmart.Models;

namespace WorkSmart.Services
{
    public class UserService
    {
        //Source Referenced: https://developer.okta.com/blog/2020/06/29/aspnet-core-mongodb
        //Not used (ignore)
        private readonly IMongoCollection<WorkSmart.Models.User> _Users;
        public UserService(IWorkSmartDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Users = database.GetCollection<WorkSmart.Models.User>(settings.UsersCollectionName);

        }

        public List<WorkSmart.Models.User> Get()
        {
            List<WorkSmart.Models.User> users;
            users = _Users.Find(log => true).ToList();
            return users;
        }

        public WorkSmart.Models.User Get(string id) =>
            _Users.Find<WorkSmart.Models.User>(response => response.Id == id).FirstOrDefault();

        public WorkSmart.Models.User Get(string username, string password) =>
            _Users.Find<WorkSmart.Models.User>(response => response.Username == username
            && response.Password == password).FirstOrDefault();

        public User Post(User user)
        {
            _Users.InsertOne(user);
            return user;
        }

        public void Put(User user) =>
            _Users.ReplaceOne(usr => usr.Id == user.Id, user);

        public void Delete(string id) =>
            _Users.DeleteOne(usr => usr.Id == id);

    }
}