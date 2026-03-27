// ── Achievements.jsx ──────────────────────────────────────────────────────────
// Save to: D:\SchoolProject\school-frontend\src\Achievements.jsx

import arnaviImg from "./assets/arnavi.jpeg";
import sonalImg from "./assets/sonal.jpeg";
import laxmiImg from "./assets/laxmi.jpeg";
import kiran1Img from "./assets/kiran2.jpeg";
import kiran2Img from "./assets/kiranjpg.jpeg";
import saina1Img from "./assets/saina 2.jpeg";
import saina2Img from "./assets/saina.jpeg";
import gemsImg from "./assets/gems_rjes.jpg";
import intermediateImg from "./assets/intermediate_2025.jpg";
import elementaryImg from "./assets/elementary_2025.jpg";

// ── DATA ──────────────────────────────────────────────────────────────────────

const awards = [
  {
    id: 1,
    title: "Best Principal Award",
    person: "Mrs. Deepa Wagh",
    role: "Principal",
    felicitatedBy: "Kiran Bedi & Saina Nehwal",
    desc: "Felicitated by Legends Kiran Bedi & Saina Nehwal for outstanding leadership and contribution to education.",
    imgs: [kiran1Img, kiran2Img],
  },
  {
    id: 2,
    title: "Best Teacher Award",
    person: "Shaila Dhote, Arun Mundlik & Krushanarao Deshmukh",
    role: "Teachers",
    felicitatedBy: "Kiran Bedi & Saina Nehwal",
    desc: "Recognized by Legends Kiran Bedi & Saina Nehwal for excellence in teaching and student development.",
    imgs: [saina1Img, saina2Img],
  },
];

const sports = [
  // NATIONAL
  {
    id: 1,
    level: "NATIONAL",
    levelColor: "#0d6efd",
    levelBg: "#e7f1ff",
    sport: "Fencing",
    medal: "🥈🥉",
    medalLabel: "SILVER & BRONZE",
    medalColor: "#C0C0C0",
    name: "Aarnavi Vinayak Lambhe",
    detail: "National Level Fencing — Silver & Bronze Medal",
    year: "2026",
    img: arnaviImg,
    order: 1,
  },
  // STATE
  {
    id: 2,
    level: "STATE",
    levelColor: "#198754",
    levelBg: "#d1e7dd",
    sport: "Karate",
    medal: "🥉",
    medalLabel: "BRONZE",
    medalColor: "#CD7F32",
    name: "Ganesh Pavan Pande",
    detail: "State Level Karate — Bronze Medal",
    year: "2026",
    img: null,
    order: 2,
  },
  {
    id: 3,
    level: "STATE",
    levelColor: "#198754",
    levelBg: "#d1e7dd",
    sport: "Fencing",
    medal: "🏅",
    medalLabel: "PARTICIPANT",
    medalColor: "#b49c78",
    name: "Laxmi Sachin Deshmukh",
    detail: "State Level Fencing — Participant",
    year: "2026",
    img: laxmiImg,
    order: 3,
  },
  {
    id: 4,
    level: "STATE",
    levelColor: "#198754",
    levelBg: "#d1e7dd",
    sport: "Fencing",
    medal: "🏅",
    medalLabel: "PARTICIPANT",
    medalColor: "#b49c78",
    name: "Sonal Keshav Sonune",
    detail: "State Level Fencing — Participant",
    year: "2026",
    img: sonalImg,
    order: 4,
  },
  // DIVISION
  {
    id: 5,
    level: "DIVISION",
    levelColor: "#6f42c1",
    levelBg: "#e8d5ff",
    sport: "Fencing",
    medal: "🏅",
    medalLabel: "PARTICIPANT",
    medalColor: "#b49c78",
    name: "Vanshata Anandayya Kathale",
    detail: "Division Level Fencing — Participant",
    year: "2026",
    img: null,
    order: 5,
  },
  {
    id: 6,
    level: "DIVISION",
    levelColor: "#6f42c1",
    levelBg: "#e8d5ff",
    sport: "Skating",
    medal: "🏅",
    medalLabel: "PARTICIPANT",
    medalColor: "#b49c78",
    name: "Kartik Surendra Sadavarte",
    detail: "Division Level Skating — Participant",
    year: "2026",
    img: null,
    order: 6,
  },
  {
    id: 7,
    level: "DIVISION",
    levelColor: "#6f42c1",
    levelBg: "#e8d5ff",
    sport: "Cricket",
    medal: "🏏",
    medalLabel: "PARTICIPANT",
    medalColor: "#b49c78",
    name: "Maharashtra State T20 U-14 Team (VCA)",
    detail: "VCA U-14 Team 2026 — Maharashtra State T20",
    year: "2026",
    img: null,
    order: 7,
  },
];

const levelOrder = ["NATIONAL", "STATE", "DIVISION"];

// ── Award Card ────────────────────────────────────────────────────────────────
function AwardCard({ award }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20,
      border: "2px solid #b49c78", overflow: "hidden",
      boxShadow: "0 8px 32px rgba(180,156,120,0.15)",
      transition: "transform .2s, box-shadow .2s"
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(180,156,120,0.3)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(180,156,120,0.15)"; }}
    >
      <div style={{ background: "linear-gradient(135deg,#b49c78,#9c8664)", height: 6 }} />
      <div style={{ padding: "2rem" }}>


        {/* Trophy */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>🏆</div>
          <div style={{
            display: "inline-block", background: "linear-gradient(135deg,#b49c78,#9c8664)",
            color: "#fff", borderRadius: 20, padding: "4px 16px",
            fontSize: 11, letterSpacing: 2, fontFamily: "Georgia,serif",
            fontWeight: 700, marginBottom: 12
          }}>PRESTIGIOUS AWARD</div>
        </div>

        <h3 style={{ fontFamily: "Georgia,serif", color: "#b49c78", fontSize: 18, fontWeight: 800, textAlign: "center", marginBottom: 8 }}>
          {award.title}
        </h3>
        <div style={{ color: "#212529", fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 15, textAlign: "center", marginBottom: 6 }}>
          {award.person}
        </div>
        <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2, textAlign: "center", marginBottom: 12 }}>
          {award.role.toUpperCase()}
        </div>

        <div style={{ background: "rgba(180,156,120,0.08)", borderRadius: 10, padding: "1rem", border: "1px solid #e0d5c5" }}>
          <div style={{ color: "#b49c78", fontSize: 10, letterSpacing: 2, fontFamily: "Georgia,serif", marginBottom: 6 }}>
            FELICITATED BY
          </div>
          <div style={{ color: "#212529", fontFamily: "Georgia,serif", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
            ⭐ {award.felicitatedBy}
          </div>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            {award.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Sports Card ───────────────────────────────────────────────────────────────
function SportsCard({ a }) {
  const sportEmoji = { Fencing: "🤺", Karate: "🥋", Skating: "⛸️", Cricket: "🏏" };
  return (
    <div style={{
      background: "#fff", borderRadius: 16,
      border: `2px solid ${a.levelColor}`,
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          transition: "transform .2s, box-shadow .2s",
        width: "300px",          
          height: "340px",         
          margin: "0 auto" 
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
    >
      <div style={{ background: a.levelColor, padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#fff", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>
          {a.level} LEVEL
        </span>
        <span style={{ color: "#fff", fontFamily: "Georgia,serif", fontSize: 11 }}>{a.year}</span>
      </div>

      <div style={{ padding: "1.5rem", textAlign: "center" }}>
        {/* Photo */}
        <div style={{
          width: 90, height: 90, borderRadius: "50%",
          margin: "0 auto 1rem", overflow: "hidden",
          border: `3px solid ${a.levelColor}`,
          background: "rgba(180,156,120,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {a.img
            ? <img src={a.img} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontSize: "2.5rem" }}>{sportEmoji[a.sport] || "🏅"}</span>
          }
        </div>

        {/* Medal */}
        <div style={{ fontSize: "2rem", marginBottom: 4 }}>{a.medal}</div>
        <div style={{ color: a.medalColor, fontFamily: "Georgia,serif", fontWeight: 900, fontSize: 12, letterSpacing: 2, marginBottom: 10 }}>
          {a.medalLabel}
        </div>

        {/* Sport badge */}
        <div style={{
          display: "inline-block", background: a.levelBg, color: a.levelColor,
          borderRadius: 20, padding: "2px 12px", fontSize: 10,
          letterSpacing: 2, fontFamily: "Georgia,serif", fontWeight: 700, marginBottom: 12
        }}>{a.sport.toUpperCase()}</div>

        {/* Name */}
        <div style={{ color: "#212529", fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
          {a.name}
        </div>
        <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, lineHeight: 1.6 }}>
          {a.detail}
        </div>
      </div>
    </div>
  );
}

// ── Full Achievements Page ────────────────────────────────────────────────────
export function AchievementsPage() {
  return (
    <section style={{ background: "#F8F9FA", minHeight: "100vh", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: "4rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>PRIDE OF OUR SCHOOL</div>
          <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 16 }}>
            🏆 Achievements & Awards
          </h1>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            Our school takes immense pride in the remarkable achievements of our students and staff
            at National, State, and Division levels.
          </p>
        </div>

        {/* ── PRESTIGIOUS AWARDS SECTION ── */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg,#b49c78,#9c8664)", borderRadius: 30, padding: "8px 24px" }}>
              <span style={{ fontSize: "1.5rem" }}>⭐</span>
              <span style={{ color: "#fff", fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 16, letterSpacing: 2 }}>PRESTIGIOUS AWARDS</span>
              <span style={{ fontSize: "1.5rem" }}>⭐</span>
            </div>
            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginTop: 12 }}>
              Felicitated by Legends Kiran Bedi & Saina Nehwal
            </p>
          </div>
                  {/* 4 AWARD PHOTOS FIRST */}
                  {/* 4 AWARD PHOTOS FIRST */}
                  <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "1.5rem",
                      marginBottom: "2.5rem"
                  }}>
                      {[kiran1Img, kiran2Img, saina1Img, saina2Img].map((img, i) => (
                          <div
                              key={i}
                              style={{
                                  height: 260,
                                  borderRadius: 16,
                                  overflow: "hidden",
                                  border: "3px solid #b49c78",
                                  boxShadow: "0 8px 24px rgba(180,156,120,0.25)",
                                  transition: "transform .3s"
                              }}
                              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                          >
                              <img
                                  src={img}
                                  alt="Award Ceremony"
                                  style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover"
                                  }}
                              />
                          </div>
                      ))}
                  </div>

                  {/* AWARD INFORMATION BELOW */}
                  <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                      gap: "2rem"
                  }}>
                      {awards.map(a => <AwardCard key={a.id} award={a} />)}
                  </div>
        </div>

        {/* ── SPORTS ACHIEVEMENTS — grouped by level ── */}
        {levelOrder.map(level => {
          const group = sports.filter(s => s.level === level);
          if (!group.length) return null;
          const levelInfo = {
            NATIONAL: { icon: "🌏", label: "National Level", color: "#0d6efd", bg: "#e7f1ff" },
            STATE: { icon: "🗺️", label: "State Level", color: "#198754", bg: "#d1e7dd" },
            DIVISION: { icon: "🏙️", label: "Division Level", color: "#6f42c1", bg: "#e8d5ff" },
          }[level];

          return (
            <div key={level} style={{ marginBottom: "3rem" }}>
              {/* Level Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                <div style={{
                  background: levelInfo.color, color: "#fff",
                  borderRadius: 12, padding: "8px 20px",
                  fontFamily: "Georgia,serif", fontWeight: 700,
                  fontSize: 14, letterSpacing: 2,
                  display: "flex", alignItems: "center", gap: 8
                }}>
                  <span>{levelInfo.icon}</span>
                  <span>{levelInfo.label} Sports</span>
                </div>
                <div style={{ flex: 1, height: 1, background: levelInfo.color, opacity: 0.3 }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
                {group.map(a => <SportsCard key={a.id} a={a} />)}
              </div>
            </div>
          );
        })}

        {/* Hesagle Banner */}
        <div style={{
          background: "linear-gradient(135deg,#b49c78,#9c8664)",
          borderRadius: 20, padding: "2.5rem", textAlign: "center",
          boxShadow: "0 8px 32px rgba(180,156,120,0.3)", marginBottom: "3rem"
        }}>
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>🎯</div>
          <h2 style={{ fontFamily: "Georgia,serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 12 }}>
            Hesagle School Games Competition
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontFamily: "Georgia,serif", fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
            Our students participated in the Hesagle School Games Competition, representing
            Rashtramata Jijau English School with great sportsmanship and dedication.
          </p>
        </div>

        {/* ── STUDENT TOPPERS SECTION ── */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "linear-gradient(135deg,#198754,#0f5132)", borderRadius: 30, padding: "8px 24px" }}>
              <span style={{ fontSize: "1.5rem" }}>🎓</span>
              <span style={{ color: "#fff", fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 16, letterSpacing: 2 }}>ACADEMIC TOPPERS</span>
              <span style={{ fontSize: "1.5rem" }}>🎓</span>
            </div>
            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginTop: 12 }}>
              Our bright students — consistently achieving excellence year after year
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* Gems of RJES */}
            <div style={{
              background: "#fff", border: "1px solid #e0d5c5",
              borderTop: "4px solid #b49c78",
              borderRadius: 16, padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                <span style={{ fontSize: 28 }}>💎</span>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontWeight: 800, color: "#b49c78", fontSize: 18 }}>
                    Gems of R.J.E.S.
                  </div>
                  <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, letterSpacing: 1 }}>
                    CONSECUTIVELY 100% RESULT SINCE 5 YEARS
                  </div>
                </div>
                <div style={{
                  marginLeft: "auto",
                  background: "rgba(180,156,120,0.12)",
                  border: "1px solid #b49c78",
                  borderRadius: 20, padding: "4px 16px",
                  color: "#b49c78", fontFamily: "Georgia,serif",
                  fontSize: 12, fontWeight: 700
                }}>
                  🏆 100% Board Results
                </div>
              </div>
              <img
                src={gemsImg}
                alt="Gems of RJES — Top Scorers"
                style={{ width: "100%", height: "auto", borderRadius: 12, border: "2px solid #e0d5c5" }}
              />
            </div>

            {/* Intermediate 2025 Grade A */}
            <div style={{
              background: "#fff", border: "1px solid #e0d5c5",
              borderTop: "4px solid #0d6efd",
              borderRadius: 16, padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                <span style={{ fontSize: 28 }}>🥇</span>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontWeight: 800, color: "#0d6efd", fontSize: 18 }}>
                    Intermediate Exam — 2025
                  </div>
                  <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, letterSpacing: 1 }}>
                    GRADE-A ACHIEVERS
                  </div>
                </div>
                <div style={{
                  marginLeft: "auto",
                  background: "#e7f1ff",
                  border: "1px solid #0d6efd",
                  borderRadius: 20, padding: "4px 16px",
                  color: "#0d6efd", fontFamily: "Georgia,serif",
                  fontSize: 12, fontWeight: 700
                }}>
                  ⭐ Grade A
                </div>
              </div>
              <img
                src={intermediateImg}
                alt="Intermediate Exam 2025 Grade A Students"
                style={{ width: "100%", height: "auto", borderRadius: 12, border: "2px solid #e0d5c5" }}
              />
            </div>

            {/* Elementary 2025 Grade A */}
            <div style={{
              background: "#fff", border: "1px solid #e0d5c5",
              borderTop: "4px solid #198754",
              borderRadius: 16, padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                <span style={{ fontSize: 28 }}>🌟</span>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontWeight: 800, color: "#198754", fontSize: 18 }}>
                    Elementary Exam — 2025
                  </div>
                  <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, letterSpacing: 1 }}>
                    GRADE-A ACHIEVERS
                  </div>
                </div>
                <div style={{
                  marginLeft: "auto",
                  background: "#d1e7dd",
                  border: "1px solid #198754",
                  borderRadius: 20, padding: "4px 16px",
                  color: "#198754", fontFamily: "Georgia,serif",
                  fontSize: 12, fontWeight: 700
                }}>
                  ⭐ Grade A
                </div>
              </div>
              <img
                src={elementaryImg}
                alt="Elementary Exam 2025 Grade A Students"
                style={{ width: "100%", height: "auto", borderRadius: 12, border: "2px solid #e0d5c5" }}
              />
            </div>

          </div>
        </div>

        {/* Quote */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", border: "1px solid #e0d5c5", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: "2rem", marginBottom: 12 }}>💪</div>
          <p style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 16, fontStyle: "italic", lineHeight: 1.8 }}>
            "Champions are made from something they have deep inside them — a desire, a dream, a vision."
          </p>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, marginTop: 12 }}>
            We are proud of every student who represented our school! 🏫
          </p>
        </div>

      </div>
    </section>
  );
}

// ── Home Page Mini Section ────────────────────────────────────────────────────
export function AchievementsHomeSection({ setActive }) {
  const highlights = sports.slice(0, 4);
  return (
    <section style={{ background: "#F8F9FA", padding: "5rem 2rem", borderTop: "1px solid #e0d5c5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>PRIDE OF OUR SCHOOL</div>
          <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 800, marginBottom: 12 }}>
            🏆 Achievements & Awards
          </h2>
          <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>
            Felicitated by Legends Kiran Bedi & Saina Nehwal — National, State & Division level champions!
          </p>
        </div>

        {/* Award highlight banner */}
        <div style={{
          background: "linear-gradient(135deg,#212529,#495057)",
          borderRadius: 16, padding: "1.5rem 2rem", marginBottom: "2rem",
          display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", gap: 8 }}>
            {[kiran1Img, saina1Img].map((img, i) => (
              <div key={i} style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", border: "2px solid #b49c78" }}>
                <img src={img} alt="Award" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 15 }}>
              ⭐ Best Principal & Best Teacher Awards
            </div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Georgia,serif", fontSize: 13, marginTop: 4 }}>
              Felicitated by Legends Kiran Bedi & Saina Nehwal
            </div>
          </div>
          <button onClick={() => setActive("Achievements")} style={{
            background: "linear-gradient(135deg,#b49c78,#9c8664)", color: "#fff",
            border: "none", borderRadius: 8, padding: "8px 20px",
            fontFamily: "Georgia,serif", fontSize: 13, cursor: "pointer"
          }}>View →</button>
        </div>

        {/* Top 4 sports cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {highlights.map(a => <SportsCard key={a.id} a={a} />)}
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={() => setActive("Achievements")} style={{
            background: "linear-gradient(135deg,#b49c78,#9c8664)",
            color: "#fff", border: "none", borderRadius: 8,
            padding: "12px 32px", fontSize: 14, cursor: "pointer",
            fontFamily: "Georgia,serif", letterSpacing: 1,
            boxShadow: "0 4px 16px rgba(180,156,120,0.4)"
          }}>
            View All Achievements →
          </button>
        </div>
      </div>
    </section>
  );
}
