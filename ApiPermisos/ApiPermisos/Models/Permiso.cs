using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiPermisos.Models {
    public class Permiso {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Required]
        public string? NombreEmpleado { get; set; }

        [Required]
        public string? ApellidoEmpleado { get; set; }

        [Required]
        public int TipoPermisoId { get; set; }

        [Required]
        public DateTime FechaPermiso { get; set; }

        public Permiso() {

        }
    }
}
