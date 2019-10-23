using System.Collections.Generic;

namespace TestApi.Models
{
    public class Asset
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<StringData> Strings { get; set; }
    }
}