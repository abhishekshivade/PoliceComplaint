using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Police
    {
        [Key] public int PoliceId { get; set; }
        [Required,MaxLength(50)] public string Name { get; set; }
        [Required,MaxLength (50)] public string Designation { get; set; }
        [Required,MaxLength(10)] public int Contact {  get; set; }
        [Required,MaxLength(50)] public string Password {  get; set; }
    }
}
