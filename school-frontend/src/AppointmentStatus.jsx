// ── AppointmentStatus.jsx ─────────────────────────────────────────────────────
// Add this file to: D:\SchoolProject\school-frontend\src\AppointmentStatus.jsx

import { useState } from "react";

const API = "https://school-api-vqge.onrender.com/api";

export default function AppointmentStatus() {
  const [phone, setPhone] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const check = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const res = await fetch(`${API}/appointment/status?phone=${encodeURIComponent(phone)}`);
      const data = await res.json();
      if (data && data.length > 0) setResults(data);
      else setError("No appointment found for this phone number.");
    } catch {
        setError("Could not connect. Please try again or call +91 97679 77510.");
    }
    setLoading(false);
  };

  const statusColor = (s) => {
    if (s === "Confirmed") return { bg: "#d1e7dd", color: "#0a3622", border: "#198754", icon: "✅" };
    if (s === "Cancelled") return { bg: "#f8d7da", color: "#58151c", border: "#dc3545", icon: "❌" };
    return { bg: "#fff3cd", color: "#856404", border: "#ffc107", icon: "⏳" };
  };

  return (
    <section style={{ background: "#F8F9FA", minHeight: "100vh", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: "4rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📋</div>
          <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>
            APPOINTMENT TRACKER
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: 12 }}>
            Check Your Appointment
          </h1>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.8 }}>
            Enter your registered phone number to check the status of your appointment.
          </p>
        </div>

        {/* Search Form */}
        <div style={{
          background: "#fff", border: "1px solid #e0d5c5",
          borderRadius: 16, padding: "2rem",
          boxShadow: "0 4px 20px rgba(180,156,120,0.1)",
          marginBottom: "2rem"
        }}>
          <form onSubmit={check}>
            <label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 8, letterSpacing: 2 }}>
              PHONE NUMBER
            </label>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                placeholder="+91 XXXXX XXXXX"
                style={{
                  flex: 1, padding: "13px 16px",
                  border: "1px solid #e0d5c5", borderRadius: 8,
                  fontFamily: "Georgia,serif", fontSize: 15,
                  color: "#212529", outline: "none", background: "#F8F9FA"
                }}
              />
              <button type="submit" disabled={loading} style={{
                background: "linear-gradient(135deg,#b49c78,#9c8664)",
                color: "#fff", border: "none", borderRadius: 8,
                padding: "13px 24px", fontSize: 14, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "Georgia,serif", letterSpacing: 1, whiteSpace: "nowrap"
              }}>
                {loading ? "Checking..." : "Check →"}
              </button>
            </div>
          </form>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "#fff3cd", border: "1px solid #ffc107",
            borderRadius: 12, padding: "1.5rem", textAlign: "center",
            marginBottom: "1.5rem"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🔍</div>
            <p style={{ color: "#856404", fontFamily: "Georgia,serif" }}>{error}</p>
            <p style={{ color: "#856404", fontFamily: "Georgia,serif", fontSize: 13, marginTop: 8 }}>
                          Need help? Call us at <a href="tel:+919767977510" style={{ color: "#b49c78" }}>+91 97679 77510</a>
            </p>
          </div>
        )}

        {/* Results */}
        {results && results.map((appt, i) => {
          const s = statusColor(appt.status);
          return (
            <div key={i} style={{
              background: "#fff", border: `2px solid ${s.border}`,
              borderRadius: 16, padding: "2rem", marginBottom: "1.5rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              {/* Status Banner */}
              <div style={{
                background: s.bg, border: `1px solid ${s.border}`,
                borderRadius: 10, padding: "1rem", textAlign: "center", marginBottom: "1.5rem"
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 4 }}>{s.icon}</div>
                <div style={{ color: s.color, fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 18, letterSpacing: 1 }}>
                  {appt.status.toUpperCase()}
                </div>
                <div style={{ color: s.color, fontFamily: "Georgia,serif", fontSize: 12, marginTop: 4 }}>
                  {appt.status === "Confirmed" && "Your appointment is confirmed! Please arrive 10 minutes early."}
                  {appt.status === "Pending" && "Your appointment is being reviewed. We will confirm soon."}
                  {appt.status === "Cancelled" && "Your appointment was cancelled. Please book again or call us."}
                </div>
              </div>

              {/* Details */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { label: "Parent Name", value: appt.parentName, icon: "👤" },
                  { label: "Child Name", value: appt.childName, icon: "👶" },
                  { label: "Class Applying", value: appt.classApplyingFor || "—", icon: "📚" },
                  { label: "Child Age", value: appt.childAge || "—", icon: "🎂" },
                  { label: "Appointment Date", value: appt.preferredDate, icon: "📅" },
                  { label: "Preferred Time", value: appt.preferredTime || "Any time", icon: "⏰" },
                ].map((f, j) => (
                  <div key={j} style={{
                    background: "#F8F9FA", borderRadius: 8, padding: "0.75rem",
                    border: "1px solid #e0d5c5"
                  }}>
                    <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, fontFamily: "Georgia,serif", marginBottom: 4 }}>
                      {f.icon} {f.label.toUpperCase()}
                    </div>
                    <div style={{ color: "#212529", fontFamily: "Georgia,serif", fontSize: 14, fontWeight: 600 }}>
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>

              {appt.additionalNotes && (
                <div style={{ marginTop: "1rem", background: "#F8F9FA", borderRadius: 8, padding: "0.75rem", border: "1px solid #e0d5c5" }}>
                  <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, fontFamily: "Georgia,serif", marginBottom: 4 }}>📝 NOTES</div>
                  <div style={{ color: "#495057", fontFamily: "Georgia,serif", fontSize: 13 }}>{appt.additionalNotes}</div>
                </div>
              )}

              {/* Contact */}
              <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "1rem", background: "rgba(180,156,120,0.08)", borderRadius: 10, border: "1px solid #e0d5c5" }}>
                <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: 8 }}>
                  Questions? Contact us:
                </p>
                <a href="tel:+919373918838" style={{
                  display: "inline-block", background: "linear-gradient(135deg,#b49c78,#9c8664)",
                  color: "#fff", borderRadius: 6, padding: "8px 20px",
                  textDecoration: "none", fontFamily: "Georgia,serif", fontSize: 13
                }}>📞 +91 93739 18838</a>
              </div>
            </div>
          );
        })}

        {/* Info box */}
        {!results && !error && (
          <div style={{
            background: "rgba(180,156,120,0.08)", border: "1px solid #e0d5c5",
            borderRadius: 12, padding: "1.5rem", textAlign: "center"
          }}>
            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 14, lineHeight: 1.8 }}>
              📌 Enter the phone number you used when booking the appointment.<br />
              If you haven't booked yet, <strong style={{ color: "#b49c78" }}>click Appointment</strong> in the menu.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
