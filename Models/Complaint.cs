using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class Complaint
    {
        [Key] public int ComplaintId { get; set; }
        [Required,MaxLength(50)] public string Complainant { get; set; }
        [Required, MaxLength(10)] public int Contact { get; set; }
        [Required,MaxLength(50)] public string Address {  get; set; }
        [Required,MaxLength(50)] public string Caterogy { get; set; }
        [Required,MaxLength(12)] public int AadhaarId { get; set; }
        [Required] public DateTime Date {  get; set; }
        [Required,MaxLength(1000)] public string Description { get; set; }
        public int AssignedOfficerId {  get; set; }
        [ForeignKey("AssignedOfficerId")] public Police AssignedOfficer { get; set; }
    }
}
