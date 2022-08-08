using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiPermisos.Data;
using ApiPermisos.Models;

namespace ApiPermisos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoPermisosController : ControllerBase    {
        private readonly ApiPermisosContext _context;

        public TipoPermisosController(ApiPermisosContext context)
        {
            _context = context;
        }

        // GET: api/TipoPermisoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoPermiso>>> GettipoPermiso()
        {
          if (_context.TipoPermiso == null)
          {
              return NotFound();
          }
            return await _context.TipoPermiso.ToListAsync();
        }

        // GET: api/TipoPermisoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoPermiso>> GetTipoPermiso(int id)
        {
          if (_context.TipoPermiso == null)
          {
              return NotFound();
          }
            var tipoPermiso = await _context.TipoPermiso.FindAsync(id);

            if (tipoPermiso == null)
            {
                return NotFound();
            }

            return tipoPermiso;
        }

        // PUT: api/TipoPermisoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoPermiso(int id, TipoPermiso tipoPermiso)
        {
            if (id != tipoPermiso.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoPermiso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoPermisoExists(id))
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

        // POST: api/TipoPermisoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoPermiso>> PostTipoPermiso(TipoPermiso tipoPermiso)
        {
          if (_context.TipoPermiso == null)
          {
              return Problem("Entity set 'ApiPermisosContext.tipoPermiso'  is null.");
          }
            _context.TipoPermiso.Add(tipoPermiso);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoPermiso", new { id = tipoPermiso.Id }, tipoPermiso);
        }

        // DELETE: api/TipoPermisoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoPermiso(int id)
        {
            if (_context.TipoPermiso == null)
            {
                return NotFound();
            }
            var tipoPermiso = await _context.TipoPermiso.FindAsync(id);
            if (tipoPermiso == null)
            {
                return NotFound();
            }

            _context.TipoPermiso.Remove(tipoPermiso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoPermisoExists(int id)
        {
            return (_context.TipoPermiso?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
