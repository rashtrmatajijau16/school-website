using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models;

[Table("ContactMessages")]
public class ContactMessage
{
    public int    Id        { get; set; }
    [Required, MaxLength(100)]
    public string FullName  { get; set; } = string.Empty;
    [Required, MaxLength(150), EmailAddress]
    public string Email     { get; set; } = string.Empty;
    [MaxLength(20)]
    public string? Phone    { get; set; }
    [MaxLength(200)]
    public string? Subject  { get; set; }
    [Required]
    public string Message   { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool     IsRead    { get; set; } = false;
}

[Table("Appointments")]
public class Appointment
{
    public int    Id               { get; set; }
    [Required, MaxLength(100)]
    public string ParentName       { get; set; } = string.Empty;
    [Required, MaxLength(100)]
    public string ChildName        { get; set; } = string.Empty;
    [Required, MaxLength(20)]
    public string Phone            { get; set; } = string.Empty;
    [MaxLength(150), EmailAddress]
    public string? Email           { get; set; }
    public int?   ChildAge         { get; set; }
    [MaxLength(50)]
    public string? ClassApplyingFor { get; set; }
    [Required]
    public DateOnly PreferredDate  { get; set; }
    [MaxLength(30)]
    public string? PreferredTime   { get; set; }
    public string? AdditionalNotes { get; set; }
    [MaxLength(20)]
    public string  Status          { get; set; } = "Pending";
    public DateTime CreatedAt      { get; set; } = DateTime.UtcNow;
}

[Table("Testimonials")]
public class Testimonial
{
    public int    Id        { get; set; }
    [Required, MaxLength(100)]
    public string Name      { get; set; } = string.Empty;
    [MaxLength(100)]
    public string? Role     { get; set; }
    [Required]
    public string Message   { get; set; } = string.Empty;
    public bool IsActive    { get; set; } = true;
    public int  SortOrder   { get; set; } = 0;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

[Table("Gallery")]
public class GalleryItem
{
    public int    Id        { get; set; }
    [Required, MaxLength(200)]
    public string Title     { get; set; } = string.Empty;
    [Required, MaxLength(500)]
    public string ImageUrl  { get; set; } = string.Empty;
    [MaxLength(100)]
    public string? Category { get; set; }
    public bool IsActive    { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
