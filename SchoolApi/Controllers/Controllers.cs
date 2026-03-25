using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolApi.Data;
using SchoolApi.Models;
using System.Net;
using System.Net.Mail;

namespace SchoolApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly SchoolDbContext _db;
    public ContactController(SchoolDbContext db) => _db = db;

    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactMessage msg)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        msg.CreatedAt = DateTime.UtcNow;
        _db.ContactMessages.Add(msg);
        await _db.SaveChangesAsync();
        return Ok(new { success = true, message = "Thank you! We will get back to you soon." });
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var msgs = await _db.ContactMessages.OrderByDescending(m => m.CreatedAt).ToListAsync();
        return Ok(msgs);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var msg = await _db.ContactMessages.FindAsync(id);
        if (msg == null) return NotFound();
        _db.ContactMessages.Remove(msg);
        await _db.SaveChangesAsync();
        Console.WriteLine($"[DELETE] Message {id} deleted");
        return Ok(new { success = true });
    }
}

[ApiController]
[Route("api/[controller]")]
public class AppointmentController : ControllerBase
{
    private readonly SchoolDbContext _db;
    private readonly IConfiguration _config;

    public AppointmentController(SchoolDbContext db, IConfiguration config)
    {
        _db = db;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Book([FromBody] Appointment appt)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        appt.CreatedAt = DateTime.UtcNow;
        appt.Status = "Pending";
        _db.Appointments.Add(appt);
        await _db.SaveChangesAsync();

        if (!string.IsNullOrEmpty(appt.Email))
            await SendEmail(appt.Email, appt.ParentName, appt.ChildName, appt.PreferredDate.ToString(), appt.PreferredTime ?? "To be confirmed", "Pending");

        return Ok(new { success = true, message = "Appointment booked! We will confirm shortly." });
    }

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? status = null)
    {
        var query = _db.Appointments.AsQueryable();
        if (!string.IsNullOrEmpty(status))
            query = query.Where(a => a.Status == status);
        return Ok(await query.OrderByDescending(a => a.PreferredDate).ToListAsync());
    }

    [HttpGet("status")]
    public async Task<IActionResult> GetByPhone([FromQuery] string phone)
    {
        if (string.IsNullOrEmpty(phone)) return BadRequest("Phone number required");
        var clean = phone.Replace(" ", "").Replace("-", "").Replace("+91", "").Trim();
        var appts = await _db.Appointments
            .Where(a => a.Phone.Replace(" ", "").Replace("-", "").Replace("+91", "").Contains(clean))
            .OrderByDescending(a => a.CreatedAt)
            .ToListAsync();
        return Ok(appts);
    }

    [HttpPatch("{id}/status")]
    public async Task<IActionResult> UpdateStatus(int id, [FromBody] string newStatus)
    {
        var appt = await _db.Appointments.FindAsync(id);
        if (appt == null) return NotFound();
        appt.Status = newStatus;
        await _db.SaveChangesAsync();

        Console.WriteLine($"[EMAIL] Attempting to send to {appt.Email} for status {newStatus}");

        if (!string.IsNullOrEmpty(appt.Email))
            await SendEmail(appt.Email, appt.ParentName, appt.ChildName, appt.PreferredDate.ToString(), appt.PreferredTime ?? "To be confirmed", newStatus);

        return Ok(appt);
    }

    // Delete appointment (admin)
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var appt = await _db.Appointments.FindAsync(id);
        if (appt == null) return NotFound();
        _db.Appointments.Remove(appt);
        await _db.SaveChangesAsync();
        Console.WriteLine($"[DELETE] Appointment {id} deleted");
        return Ok(new { success = true });
    }

    private async Task SendEmail(string toEmail, string parentName, string childName, string date, string time, string status)
    {
        try
        {
            var gmailUser = _config["Email:Gmail"];
            var gmailPass = _config["Email:AppPassword"];

            Console.WriteLine($"[EMAIL] Gmail: {gmailUser}, Pass length: {gmailPass?.Length}");

            if (string.IsNullOrEmpty(gmailUser) || string.IsNullOrEmpty(gmailPass))
            {
                Console.WriteLine("[EMAIL] Config missing in appsettings.json!");
                return;
            }

            string statusMsg = status == "Confirmed"
                ? "Great news! Your appointment has been CONFIRMED. Please arrive 10 minutes early."
                : status == "Cancelled"
                ? "Your appointment was cancelled. Please call us to reschedule."
                : "Your appointment request has been received. We will confirm shortly.";

            string body = $@"Dear {parentName},

Appointment Status: {status.ToUpper()}

{statusMsg}

Appointment Details:
Child Name : {childName}
Date       : {date}
Time       : {time}
Status     : {status}

Check your status at: http://localhost:5173 - Click Status menu

Questions? Call: +91 93739 18838
Email: rjessa2018@gmail.com

Rashtramata Jijau English School & Junior College
Chikhli, Buldhana, Maharashtra";

            using var client = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,    
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(gmailUser, gmailPass)
            };

            using var mail = new MailMessage();
            mail.From = new MailAddress(gmailUser, "Rashtramata Jijau School");
            mail.To.Add(new MailAddress(toEmail));
            mail.Subject = $"Appointment {status} - Rashtramata Jijau School";
            mail.Body = body;
            mail.IsBodyHtml = false;

            await client.SendMailAsync(mail);
            Console.WriteLine($"[EMAIL] Sent successfully to {toEmail}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"[EMAIL ERROR] {ex.Message}");
        }
    }
}

[ApiController]
[Route("api/[controller]")]
public class TestimonialsController : ControllerBase
{
    private readonly SchoolDbContext _db;
    public TestimonialsController(SchoolDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetActive()
    {
        var list = await _db.Testimonials.Where(t => t.IsActive).OrderBy(t => t.SortOrder).ToListAsync();
        return Ok(list);
    }
}

[ApiController]
[Route("api/[controller]")]
public class GalleryController : ControllerBase
{
    private readonly SchoolDbContext _db;
    public GalleryController(SchoolDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? category = null)
    {
        var query = _db.Gallery.Where(g => g.IsActive);
        if (!string.IsNullOrEmpty(category))
            query = query.Where(g => g.Category == category);
        return Ok(await query.ToListAsync());
    }
}

// ── AdminController (OTP for forgot password) ─────────────────────────────────
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly IConfiguration _config;
    public AdminController(IConfiguration config) => _config = config;

    [HttpPost("send-otp")]
    public async Task<IActionResult> SendOtp([FromBody] OtpRequest req)
    {
        try
        {
            var gmailUser = _config["Email:Gmail"];
            var gmailPass = _config["Email:AppPassword"];

            string body = $@"Dear Admin,

Your OTP for Rashtramata Jijau School Admin Dashboard:

==============================
   OTP Code: {req.Otp}
==============================

This OTP is valid for 2 minutes only.
Do not share this OTP with anyone.

If you did not request this, please ignore this email.

Rashtramata Jijau English School & Junior College
Chikhli, Buldhana, Maharashtra";

            using var client = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(gmailUser, gmailPass)
            };

            using var mail = new MailMessage();
            mail.From = new MailAddress(gmailUser, "Rashtramata Jijau School");
            mail.To.Add(new MailAddress(req.Email));
            mail.Subject = $"Admin OTP: {req.Otp} - Rashtramata Jijau School";
            mail.Body = body;
            mail.IsBodyHtml = false;

            await client.SendMailAsync(mail);
            Console.WriteLine($"[OTP] Sent to {req.Email}");
            return Ok(new { success = true });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"[OTP ERROR] {ex.Message}");
            return StatusCode(500, new { error = ex.Message });
        }
    }
}

public class OtpRequest
{
    public string Email { get; set; } = "";
    public string Otp { get; set; } = "";
}
