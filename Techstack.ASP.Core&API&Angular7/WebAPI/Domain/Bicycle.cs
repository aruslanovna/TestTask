using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Bicycle
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Price { get; set; }

        public string Status { get; set; }

    }

    public enum Type
    {
        Highway,
        Mountain
    }
    public enum Status
    {
        Free,
        Rented
    }
}
