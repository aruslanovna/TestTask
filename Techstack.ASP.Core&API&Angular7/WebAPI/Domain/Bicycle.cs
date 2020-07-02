using System;

namespace Domain
{
    public class Bicycle
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Type Type { get; set; }
        public int Price { get; set; }

        public Status Status { get; set; }

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
