using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TestApi.Models;

namespace TestApi.Services
{
    public class AssetService
    {
        private readonly IMongoCollection<Asset> _assets;

        public AssetService(IMongoDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.Database);
            _assets = database.GetCollection<Asset>(settings.AssetCollection);
        }        

        public List<Asset> GetAssets() =>
            _assets.Find(asset => true).ToList();

        public Asset GetAsset(string id) =>
            _assets.Find<Asset>(asset => asset.Id == id).FirstOrDefault();

        public Asset CreateAsset(Asset asset) 
        {
            _assets.InsertOne(asset);
            return asset;
        }

        public void UpdateAsset(string id, Asset assetIn) =>
            _assets.ReplaceOne(asset => asset.Id == id, assetIn);

        public void RemoveAsset(Asset assetIn) =>
            _assets.DeleteOne(asset => asset.Id == assetIn.Id);

        public void RemoveAsset(string id) =>
            _assets.DeleteOne(asset => asset.Id == id);        
    }
}