﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Apifood.Database;

namespace Apifood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly DemoDbContext _context;

        public NewsController(DemoDbContext context)
        {
            _context = context;
        }

        // GET: api/News
        [HttpGet]
        public async Task<ActionResult<IEnumerable<New>>> Getnews()
        {
            return await _context.news.ToListAsync();
        }

        // GET: api/News/5
        [HttpGet("{id}")]
        public async Task<ActionResult<New>> GetNew(int id)
        {
            var @new = await _context.news.FindAsync(id);

            if (@new == null)
            {
                return NotFound();
            }

            return @new;
        }

        // PUT: api/News/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNew(int id, New @new)
        {
            if (id != @new.newsid)
            {
                return BadRequest();
            }

            _context.Entry(@new).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewExists(id))
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

        // POST: api/News
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<New>> PostNew(New @new)
        {
            _context.news.Add(@new);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNew", new { id = @new.newsid }, @new);
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNew(int id)
        {
            var @new = await _context.news.FindAsync(id);
            if (@new == null)
            {
                return NotFound();
            }

            _context.news.Remove(@new);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewExists(int id)
        {
            return _context.news.Any(e => e.newsid == id);
        }
    }
}
