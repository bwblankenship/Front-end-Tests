namespace TestApi.Config
{
    public class MongoDatabaseSettings : IMongoDatabaseSettings
    {
        public string Database { get; set; }
        public string AssetCollection { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }

        public string ConnectionString 
        {
            get{ return $@"mongodb://{Host}:{Port}"; }
        }
    }

    public interface IMongoDatabaseSettings
    {
        string Database { get; set; }
        string AssetCollection { get; set; }
        string Host { get; set; }
        int Port { get; set; }
        string ConnectionString { get; } 
    }
}