
﻿using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public interface IApplicationDbContext
    {
         DbSet<Bicycle> Bicycles { get; set; }

     
    }
}
