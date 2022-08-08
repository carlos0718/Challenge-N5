using Microsoft.EntityFrameworkCore;
using ApiPermisos.Models;

namespace ApiPermisos.Data
{
    public class ApiPermisosContext : DbContext
    {
        public ApiPermisosContext (DbContextOptions<ApiPermisosContext> options)
            : base(options)
        {
        }

        public DbSet<Permiso>? Permiso { get; set; } = default!;
        public DbSet<TipoPermiso>? TipoPermiso { get; set; }
    }
}
