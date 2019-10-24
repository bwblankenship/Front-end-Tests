using TestApi.Models;
using TestApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssetController : ControllerBase
    {
        private readonly AssetService _assetService;

        public AssetController(AssetService assetService)
        {
            _assetService = assetService;
        }

        [HttpGet]
        public ActionResult<List<Asset>> Get() => 
            _assetService.GetAssets();
        
        [HttpGet("{id:length(24)}", Name = "GetAsset")]
        public ActionResult<Asset> Get(string id)
        {
            var asset = _assetService.GetAsset(id);

            if(asset == null)
            {
                return NotFound();
            }

            return asset;
        }

        [HttpPost]
        public ActionResult<Asset> Create(Asset asset)
        {
            asset = _assetService.CreateAsset(asset);

            return asset;            
        }

        [HttpPut("{id:length(24)}")]
        public ActionResult Update(string id, Asset assetIn)
        {
            var asset = _assetService.GetAsset(id);

            if(asset == null)
            {
                return NotFound();
            }

            _assetService.UpdateAsset(id, assetIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public ActionResult Delete(string id)
        {
            var asset = _assetService.GetAsset(id);

            if(asset == null)
            {
                return NotFound();
            }

            _assetService.RemoveAsset(id);
            
            return NoContent();
        }
    }
}