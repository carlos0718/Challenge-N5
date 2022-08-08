using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
        [DataType(DataType.Date)]
        public DateTime FechaPermiso { get; set; }

        public Permiso() {

        }
    }
}
