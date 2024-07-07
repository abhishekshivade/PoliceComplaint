using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class AppDbContext: IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }

        public DbSet<Police> Police { get; set; }
        public DbSet<Complaint> Complaint { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Complaint>().HasOne(c=>c.AssignedOfficer).WithMany().HasForeignKey(c=>c.AssignedOfficerId);
        }
    }
}
