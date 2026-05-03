import { useState, useEffect, useRef } from "react";

const API = "https://school-api-vqge.onrender.com";
const ADMIN_PASSWORD = "school@2026";
const ADMIN_EMAIL = "tanmaybhandare30@gmail.com"; // Only this email can request OTP

// ── OTP Generator ─────────────────────────────────────────────────────────────
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ── Login Component ───────────────────────────────────────────────────────────
function Login({ onLogin }) {
  const [mode, setMode] = useState("login"); // login | forgot | otp | revealed
  const [pw, setPw] = useState("");
  const [loginErr, setLoginErr] = useState("");

  // Forgot password states
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotErr, setForgotErr] = useState("");
  const [sending, setSending] = useState(false);

  // OTP states
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [timer, setTimer] = useState(120); // 2 minutes
  const [expired, setExpired] = useState(false);
  const timerRef = useRef(null);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (mode === "otp") {
      setTimer(120);
      setExpired(false);
      timerRef.current = setInterval(() => {
        setTimer(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setExpired(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode]);

  const formatTimer = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // Login submit
  const submitLogin = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) { onLogin(); }
    else { setLoginErr("Wrong password! Try again."); setTimeout(() => setLoginErr(""), 2000); setPw(""); }
  };

  // Send OTP
  const sendOTP = async (e) => {
    e.preventDefault();
    if (forgotEmail.toLowerCase().trim() !== ADMIN_EMAIL.toLowerCase()) {
      setForgotErr("This email is not registered as admin!");
      return;
    }
    setSending(true);
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);

    try {
      await fetch(`${API}/admin/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail, otp: newOtp })
      });
      setMode("otp");
      setOtp(["", "", "", "", "", ""]);
    } catch {
      // Even if API fails, still show OTP screen (OTP stored in state)
      setMode("otp");
      setOtp(["", "", "", "", "", ""]);
    }
    setSending(false);
  };

  // OTP input handler
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const verifyOTP = (e) => {
    e.preventDefault();
    if (expired) { setOtpErr("OTP has expired! Please request a new one."); return; }
    const entered = otp.join("");
    if (entered === generatedOtp) {
      setMode("revealed");
    } else {
      setOtpErr("Wrong OTP! Please try again.");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
      setTimeout(() => setOtpErr(""), 2000);
    }
  };

  // Resend OTP
  const resendOTP = async () => {
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setOtp(["", "", "", "", "", ""]);
    setOtpErr("");
    setExpired(false);
    try {
      await fetch(`${API}/admin/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail, otp: newOtp })
      });
    } catch {}
    setTimer(120);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) { clearInterval(timerRef.current); setExpired(true); return 0; }
        return t - 1;
      });
    }, 1000);
    inputRefs.current[0]?.focus();
  };

  const card = {
    background: "#fff", border: "1px solid #e0d5c5",
    borderRadius: 20, padding: "2.5rem", width: "100%", maxWidth: 420,
    boxShadow: "0 12px 48px rgba(180,156,120,0.18)", textAlign: "center"
  };

  const btn = (disabled) => ({
    width: "100%", background: disabled ? "#ccc" : "linear-gradient(135deg,#b49c78,#9c8664)",
    color: "#fff", border: "none", borderRadius: 8, padding: "13px",
    fontFamily: "Georgia,serif", fontSize: 15, cursor: disabled ? "not-allowed" : "pointer",
    letterSpacing: 1, marginTop: "0.5rem", transition: "all .2s"
  });

  const inp = (err) => ({
    width: "100%", padding: "12px 16px",
    border: err ? "1px solid #dc3545" : "1px solid #e0d5c5",
    borderRadius: 8, fontFamily: "Georgia,serif", fontSize: 14,
    color: "#212529", background: err ? "#fff5f5" : "#F8F9FA",
    boxSizing: "border-box", marginBottom: "0.75rem", outline: "none"
  });

  const avatar = (emoji, bg = "linear-gradient(135deg,#b49c78,#9c8664)") => (
    <div style={{
      width: 68, height: 68, borderRadius: "50%", background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      margin: "0 auto 1.5rem", fontSize: 30,
      boxShadow: "0 4px 20px rgba(180,156,120,0.3)"
    }}>{emoji}</div>
  );

  return (
    <div style={{
      minHeight: "100vh", background: "#F8F9FA",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem"
    }}>

      {/* ── LOGIN ── */}
      {mode === "login" && (
        <div style={card}>
          {avatar("🔐")}
          <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", marginBottom: 4 }}>Admin Login</h2>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "2rem" }}>
            Rashtramata Jijau School Dashboard
          </p>
          <form onSubmit={submitLogin}>
            <input type="password" value={pw} onChange={e => setPw(e.target.value)}
              placeholder="Enter admin password" style={inp(loginErr)} />
            {loginErr && <p style={{ color: "#dc3545", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "0.5rem" }}>❌ {loginErr}</p>}
            <button type="submit" style={btn(false)}>Login →</button>
          </form>
          <button onClick={() => { setMode("forgot"); setForgotEmail(""); setForgotErr(""); }} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 13,
            marginTop: "1.2rem", textDecoration: "underline", display: "block", margin: "1.2rem auto 0"
          }}>🔑 Forgot Password?</button>
        </div>
      )}

      {/* ── FORGOT - ENTER EMAIL ── */}
      {mode === "forgot" && (
        <div style={card}>
          {avatar("📧")}
          <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", marginBottom: 4 }}>Forgot Password</h2>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "2rem" }}>
            Enter your admin email address. We will send a 6-digit OTP to reset your password.
          </p>
          <form onSubmit={sendOTP}>
            <input type="email" value={forgotEmail} onChange={e => { setForgotEmail(e.target.value); setForgotErr(""); }}
              placeholder="Enter admin email" style={inp(forgotErr)} />
            {forgotErr && <p style={{ color: "#dc3545", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "0.5rem" }}>❌ {forgotErr}</p>}
            <button type="submit" disabled={sending} style={btn(sending)}>
              {sending ? "Sending OTP..." : "Send OTP →"}
            </button>
          </form>
          <button onClick={() => setMode("login")} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13,
            marginTop: "1rem", textDecoration: "underline"
          }}>← Back to Login</button>
        </div>
      )}

      {/* ── OTP VERIFICATION ── */}
      {mode === "otp" && (
        <div style={card}>
          {avatar("📨")}
          <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", marginBottom: 4 }}>Enter OTP</h2>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "0.5rem" }}>
            A 6-digit OTP was sent to:
          </p>
          <p style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 14, fontWeight: 700, marginBottom: "1.5rem" }}>
            {forgotEmail}
          </p>

          {/* Timer */}
          <div style={{
            background: expired ? "#fff3cd" : "rgba(180,156,120,0.1)",
            border: `1px solid ${expired ? "#ffc107" : "#e0d5c5"}`,
            borderRadius: 8, padding: "0.5rem 1rem", marginBottom: "1.5rem",
            display: "inline-block"
          }}>
            <span style={{ color: expired ? "#856404" : "#b49c78", fontFamily: "Georgia,serif", fontSize: 14, fontWeight: 700 }}>
              {expired ? "⏰ OTP Expired!" : `⏱ Expires in: ${formatTimer(timer)}`}
            </span>
          </div>

          {/* OTP Boxes */}
          <form onSubmit={verifyOTP}>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={el => inputRefs.current[i] = el}
                  type="text" inputMode="numeric" maxLength={1}
                  value={digit}
                  onChange={e => handleOtpChange(i, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(i, e)}
                  style={{
                    width: 48, height: 56, textAlign: "center",
                    fontSize: 22, fontWeight: 700, fontFamily: "Georgia,serif",
                    border: otpErr ? "2px solid #dc3545" : digit ? "2px solid #b49c78" : "2px solid #e0d5c5",
                    borderRadius: 10, background: digit ? "rgba(180,156,120,0.08)" : "#F8F9FA",
                    color: "#212529", outline: "none", transition: "all .15s"
                  }}
                />
              ))}
            </div>
            {otpErr && <p style={{ color: "#dc3545", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "0.75rem" }}>❌ {otpErr}</p>}
            <button type="submit" disabled={otp.join("").length !== 6 || expired} style={btn(otp.join("").length !== 6 || expired)}>
              Verify OTP →
            </button>
          </form>

          {/* Resend */}
          <div style={{ marginTop: "1rem" }}>
            {expired ? (
              <button onClick={resendOTP} style={{
                background: "none", border: "1px solid #b49c78", cursor: "pointer",
                color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 13,
                padding: "8px 20px", borderRadius: 6
              }}>🔄 Resend OTP</button>
            ) : (
              <p style={{ color: "#adb5bd", fontFamily: "Georgia,serif", fontSize: 12 }}>
                Didn't receive? Wait for timer to expire then resend.
              </p>
            )}
          </div>

          <button onClick={() => setMode("login")} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13,
            marginTop: "1rem", textDecoration: "underline"
          }}>← Back to Login</button>
        </div>
      )}

      {/* ── REVEALED ── */}
      {mode === "revealed" && (
        <div style={card}>
          {avatar("✅", "#d1e7dd")}
          <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", marginBottom: 4 }}>OTP Verified!</h2>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginBottom: "1.5rem" }}>
            Your admin password is:
          </p>
          <div style={{
            background: "rgba(180,156,120,0.1)", border: "2px dashed #b49c78",
            borderRadius: 12, padding: "1.5rem", marginBottom: "2rem"
          }}>
            <p style={{
              color: "#b49c78", fontFamily: "Georgia,serif",
              fontSize: 28, fontWeight: 900, letterSpacing: 6, margin: 0
            }}>
              {ADMIN_PASSWORD}
            </p>
          </div>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, marginBottom: "1rem" }}>
            Please save this password somewhere safe.
          </p>
          <button onClick={() => { setMode("login"); setPw(""); }} style={btn(false)}>
            Go to Login →
          </button>
        </div>
      )}
    </div>
  );
}

// ── Status Badge ──────────────────────────────────────────────────────────────
function Badge({ status }) {
  const colors = {
    Pending:   { bg: "#fff3cd", color: "#856404", border: "#ffc107" },
    Confirmed: { bg: "#d1e7dd", color: "#0a3622", border: "#198754" },
    Cancelled: { bg: "#f8d7da", color: "#58151c", border: "#dc3545" },
  };
  const c = colors[status] || colors.Pending;
  return (
    <span style={{
      background: c.bg, color: c.color, border: `1px solid ${c.border}`,
      borderRadius: 20, padding: "3px 12px", fontSize: 11,
      fontFamily: "Georgia,serif", letterSpacing: 1, fontWeight: 700
    }}>{status}</span>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    if (!loggedIn) return;
    loadData();
  }, [loggedIn]);

  const loadData = () => {
    setLoading(true);
    Promise.all([
      fetch(`${API}/appointment`).then(r => r.json()),
      fetch(`${API}/contact`).then(r => r.json()),
    ]).then(([appts, msgs]) => {
      setAppointments(appts || []);
      setMessages(msgs || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  const updateStatus = async (id, newStatus) => {
    setUpdating(id);
    try {
      await fetch(`${API}/appointment/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStatus)
      });
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
      if (selected?.id === id) setSelected(prev => ({ ...prev, status: newStatus }));
    } catch {}
    setUpdating(null);
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await fetch(`${API}/appointment/${id}`, { method: "DELETE" });
      setAppointments(prev => prev.filter(a => a.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {}
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetch(`${API}/contact/${id}`, { method: "DELETE" });
      setMessages(prev => prev.filter(m => m.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {}
  };

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  const pendingCount = appointments.filter(a => a.status === "Pending").length;
  const confirmedCount = appointments.filter(a => a.status === "Confirmed").length;

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FA", fontFamily: "Georgia,serif" }}>

      {/* Top Bar */}
      <div style={{
        background: "#fff", borderBottom: "1px solid #e0d5c5",
        padding: "0 2rem", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg,#b49c78,#9c8664)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 16
          }}>🏫</div>
          <div>
            <div style={{ color: "#b49c78", fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>ADMIN DASHBOARD</div>
            <div style={{ color: "#6C757D", fontSize: 10, letterSpacing: 2 }}>RASHTRAMATA JIJAU SCHOOL</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={loadData} style={{
            background: "rgba(180,156,120,0.1)", border: "1px solid #e0d5c5",
            borderRadius: 6, padding: "6px 16px", cursor: "pointer",
            color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 13
          }}>🔄 Refresh</button>
          <button onClick={() => setLoggedIn(false)} style={{
            background: "none", border: "1px solid #e0d5c5",
            borderRadius: 6, padding: "6px 16px", cursor: "pointer",
            color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13
          }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { icon: "📋", label: "Total Appointments", value: appointments.length, color: "#b49c78" },
            { icon: "⏳", label: "Pending", value: pendingCount, color: "#ffc107" },
            { icon: "✅", label: "Confirmed", value: confirmedCount, color: "#198754" },
            { icon: "✉️", label: "Contact Messages", value: messages.length, color: "#0d6efd" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid #e0d5c5",
              borderRadius: 12, padding: "1.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ color: "#6C757D", fontSize: 12, letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", background: "#fff", borderRadius: 10, padding: 4, border: "1px solid #e0d5c5", width: "fit-content" }}>
          {[
            { key: "appointments", label: `📋 Appointments (${appointments.length})` },
            { key: "messages", label: `✉️ Messages (${messages.length})` },
          ].map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); setSelected(null); }} style={{
              background: tab === t.key ? "linear-gradient(135deg,#b49c78,#9c8664)" : "none",
              color: tab === t.key ? "#fff" : "#6C757D",
              border: "none", borderRadius: 8, padding: "8px 20px", cursor: "pointer",
              fontFamily: "Georgia,serif", fontSize: 13, transition: "all .2s"
            }}>{t.label}</button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "#b49c78" }}>Loading...</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 380px" : "1fr", gap: "1.5rem" }}>
            <div>
              {tab === "appointments" && (
                appointments.length === 0 ? (
                  <div style={{ background: "#fff", borderRadius: 12, padding: "3rem", textAlign: "center", border: "1px solid #e0d5c5" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 12 }}>📋</div>
                    <p style={{ color: "#6C757D" }}>No appointments yet</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {appointments.map(a => (
                      <div key={a.id} onClick={() => setSelected(selected?.id === a.id ? null : a)} style={{
                        background: selected?.id === a.id ? "rgba(180,156,120,0.08)" : "#fff",
                        border: selected?.id === a.id ? "1px solid #b49c78" : "1px solid #e0d5c5",
                        borderRadius: 12, padding: "1.2rem 1.5rem", cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "all .2s"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                          <div>
                            <div style={{ fontWeight: 700, color: "#212529", fontSize: 15 }}>👤 {a.parentName}</div>
                            <div style={{ color: "#6C757D", fontSize: 13, marginTop: 2 }}>
                              Child: <strong>{a.childName}</strong> · Class: {a.classApplyingFor || "—"} · 📞 {a.phone}
                            </div>
                            <div style={{ color: "#b49c78", fontSize: 12, marginTop: 4 }}>
                              📅 {a.preferredDate} {a.preferredTime ? `· ⏰ ${a.preferredTime}` : ""}
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Badge status={a.status} />
                            <span style={{ color: "#adb5bd", fontSize: 18 }}>›</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}

              {tab === "messages" && (
                messages.length === 0 ? (
                  <div style={{ background: "#fff", borderRadius: 12, padding: "3rem", textAlign: "center", border: "1px solid #e0d5c5" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 12 }}>✉️</div>
                    <p style={{ color: "#6C757D" }}>No messages yet</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {messages.map(m => (
                      <div key={m.id} onClick={() => setSelected(selected?.id === m.id ? null : m)} style={{
                        background: selected?.id === m.id ? "rgba(180,156,120,0.08)" : "#fff",
                        border: selected?.id === m.id ? "1px solid #b49c78" : "1px solid #e0d5c5",
                        borderRadius: 12, padding: "1.2rem 1.5rem", cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "all .2s"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                          <div>
                            <div style={{ fontWeight: 700, color: "#212529", fontSize: 15 }}>✉️ {m.fullName}</div>
                            <div style={{ color: "#6C757D", fontSize: 13, marginTop: 2 }}>
                              📧 {m.email} {m.phone ? `· 📞 ${m.phone}` : ""}
                            </div>
                            {m.subject && <div style={{ color: "#b49c78", fontSize: 12, marginTop: 4 }}>Subject: {m.subject}</div>}
                            <div style={{ color: "#6C757D", fontSize: 12, marginTop: 4 }}>
                              {m.message?.substring(0, 80)}{m.message?.length > 80 ? "..." : ""}
                            </div>
                          </div>
                          <span style={{ color: "#adb5bd", fontSize: 18 }}>›</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>

            {selected && (
              <div style={{
                background: "#fff", border: "1px solid #e0d5c5",
                borderRadius: 12, padding: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                alignSelf: "start", position: "sticky", top: 20
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <h3 style={{ color: "#b49c78", fontSize: 16 }}>
                    {tab === "appointments" ? "📋 Appointment Detail" : "✉️ Message Detail"}
                  </h3>
                  <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#adb5bd", fontSize: 20 }}>×</button>
                </div>

                {tab === "appointments" ? (
                  <div>
                    {[
                      { label: "Parent Name", value: selected.parentName },
                      { label: "Child Name", value: selected.childName },
                      { label: "Phone", value: selected.phone },
                      { label: "Email", value: selected.email || "—" },
                      { label: "Child Age", value: selected.childAge || "—" },
                      { label: "Class", value: selected.classApplyingFor || "—" },
                      { label: "Preferred Date", value: selected.preferredDate },
                      { label: "Preferred Time", value: selected.preferredTime || "Any time" },
                    ].map((f, i) => (
                      <div key={i} style={{ marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid #f0ebe2" }}>
                        <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, marginBottom: 2 }}>{f.label.toUpperCase()}</div>
                        <div style={{ color: "#212529", fontSize: 14 }}>{f.value}</div>
                      </div>
                    ))}
                    {selected.additionalNotes && (
                      <div style={{ marginBottom: "1.5rem" }}>
                        <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, marginBottom: 4 }}>NOTES</div>
                        <div style={{ color: "#495057", fontSize: 13, lineHeight: 1.7, background: "#F8F9FA", borderRadius: 8, padding: "0.75rem" }}>
                          {selected.additionalNotes}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop: "1rem" }}>
                      <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, marginBottom: 10 }}>UPDATE STATUS</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {["Pending", "Confirmed", "Cancelled"].map(s => (
                          <button key={s} onClick={() => updateStatus(selected.id, s)}
                            disabled={selected.status === s || updating === selected.id}
                            style={{
                              background: selected.status === s ? "linear-gradient(135deg,#b49c78,#9c8664)" : "#F8F9FA",
                              color: selected.status === s ? "#fff" : "#6C757D",
                              border: "1px solid #e0d5c5", borderRadius: 6,
                              padding: "6px 14px", cursor: selected.status === s ? "default" : "pointer",
                              fontFamily: "Georgia,serif", fontSize: 12,
                              opacity: updating === selected.id ? 0.6 : 1
                            }}>
                            {updating === selected.id ? "..." : s}
                          </button>
                        ))}
                        <button onClick={() => deleteAppointment(selected.id)} style={{
                          background: "#fff5f5", color: "#dc3545",
                          border: "1px solid #dc3545", borderRadius: 6,
                          padding: "6px 14px", cursor: "pointer",
                          fontFamily: "Georgia,serif", fontSize: 12,
                          marginLeft: "auto"
                        }}>
                          🗑️ Delete
                        </button>
                      </div>
                      <p style={{ color: "#6C757D", fontSize: 11, marginTop: 10, fontFamily: "Georgia,serif" }}>
                        📧 Email notification sent to parent automatically.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {[
                      { label: "Full Name", value: selected.fullName },
                      { label: "Email", value: selected.email },
                      { label: "Phone", value: selected.phone || "—" },
                      { label: "Subject", value: selected.subject || "—" },
                    ].map((f, i) => (
                      <div key={i} style={{ marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid #f0ebe2" }}>
                        <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, marginBottom: 2 }}>{f.label.toUpperCase()}</div>
                        <div style={{ color: "#212529", fontSize: 14 }}>{f.value}</div>
                      </div>
                    ))}
                    <div style={{ marginTop: "0.5rem" }}>
                      <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, marginBottom: 8 }}>MESSAGE</div>
                      <div style={{ color: "#495057", fontSize: 14, lineHeight: 1.8, background: "#F8F9FA", borderRadius: 8, padding: "1rem" }}>
                        {selected.message}
                      </div>
                    </div>
                    <a href={`mailto:${selected.email}`} style={{
                      display: "block", marginTop: "1.5rem", textAlign: "center",
                      background: "linear-gradient(135deg,#b49c78,#9c8664)",
                      color: "#fff", borderRadius: 8, padding: "10px",
                      textDecoration: "none", fontFamily: "Georgia,serif", fontSize: 13
                    }}>📧 Reply via Email</a>
                    <button onClick={() => deleteMessage(selected.id)} style={{
                      width: "100%", marginTop: "0.75rem",
                      background: "#fff5f5", color: "#dc3545",
                      border: "1px solid #dc3545", borderRadius: 8,
                      padding: "10px", cursor: "pointer",
                      fontFamily: "Georgia,serif", fontSize: 13
                    }}>
                      🗑️ Delete Message
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
