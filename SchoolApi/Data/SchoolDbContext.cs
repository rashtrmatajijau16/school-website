using Microsoft.EntityFrameworkCore;
using SchoolApi.Models;

namespace SchoolApi.Data;

public class SchoolDbContext : DbContext
{
    public SchoolDbContext(DbContextOptions<SchoolDbContext> options) : base(options) { }

    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<Appointment>    Appointments    => Set<Appointment>();
    public DbSet<Testimonial>    Testimonials    => Set<Testimonial>();
    public DbSet<GalleryItem>    Gallery         => Set<GalleryItem>();
}
