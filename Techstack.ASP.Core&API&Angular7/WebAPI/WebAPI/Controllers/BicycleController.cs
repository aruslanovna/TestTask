
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BicycleController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BicycleController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Bicycle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bicycle>>> GetBicycles()
        {
            return await _context.Bicycles.ToListAsync();
        }


        // PUT: api/Bicycle/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBicycle(int id, Bicycle bicycle)
        {
            if(id != bicycle.Id)
            {
                return BadRequest();
            }
            _context.Entry(bicycle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BicycleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // GET: api/Bicycle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bicycle>> GetBicycle(int id)
        {
            var bicycle = await _context.Bicycles.FindAsync(id);

            if (bicycle == null)
            {
                return NotFound();
            }

            return bicycle;
        }

        // POST: api/Bicycle
        [HttpPost]
        public async Task<ActionResult<Bicycle>> PostBicycle(Bicycle bicycle)
        {
            _context.Bicycles.Add(bicycle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBicycle", new { id = bicycle.Id }, bicycle);
        }

        // DELETE: api/Bicycle/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bicycle>> DeleteBicycle(int id)
        {
            var bicycle = await _context.Bicycles.FindAsync(id);
            if (bicycle == null)
            {
                return NotFound();
            }

            _context.Bicycles.Remove(bicycle);
            await _context.SaveChangesAsync();

            return bicycle;
        }

        private bool BicycleExists(int id)
        {
            return _context.Bicycles.Any(e => e.Id == id);
        }
    }
}
