namespace MongoDBWebAPI.Models
{
    public class WorkSmartDatabaseSettings : IWorkSmartDatabaseSettings
    {
        public string JournalsCollectionName { get; set; }
        public string LogsCollectionName { get; set; }
        public string MessagesCollectionName { get; set; }
        public string ResponsesCollectionName { get; set; }
        public string UsersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IWorkSmartDatabaseSettings
    {
        public string JournalsCollectionName { get; set; }
        public string LogsCollectionName { get; set; }
        public string MessagesCollectionName { get; set; }
        public string ResponsesCollectionName { get; set; }
        public string UsersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}