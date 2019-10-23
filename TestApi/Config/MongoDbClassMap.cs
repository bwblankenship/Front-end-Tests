using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using TestApi.Models;

namespace TestApi.Config
{
    public static class MongoDbClassMap
    {
        public static void RegisterClasses()
        {
            BsonClassMap.RegisterClassMap<Asset>(cm => 
            {
                cm.MapIdMember(c => c.Id).SetSerializer(new StringSerializer(BsonType.ObjectId));
            });

            BsonClassMap.RegisterClassMap<StringData>().AutoMap();
        }
    }
}