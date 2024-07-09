using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OnlinePoliceManagement.Models;

public partial class Admin
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int AdminId { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;
}
