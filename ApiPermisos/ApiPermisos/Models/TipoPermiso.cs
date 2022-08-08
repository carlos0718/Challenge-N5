using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiPermisos.Models {
    public class TipoPermiso {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Descripcion { get; set; }

        public TipoPermiso() {

        }
    }
}
