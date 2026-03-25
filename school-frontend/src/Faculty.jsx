// ── Faculty.jsx ───────────────────────────────────────────────────────────────
// Save to: D:\SchoolProject\school-frontend\src\Faculty.jsx

import karanImg from "./assets/KaranMisal.jpeg";
import anilImg from "./assets/AnilNarwade.jpeg";
import darshanImg from "./assets/Darshan.jpeg";
import shailaImg from "./assets/ShailaDhole.jpeg";
import arunImg from "./assets/ArunMundalik.jpeg";
import krushnaImg from "./assets/KrushnaDeshmukh.jpeg";

const departments = [
    {
        dept: "Science",
        icon: "🔬",
        color: "#0d6efd",
        teachers: [
            { name: "Krushna Deshmukh", img: krushnaImg },
            { name: "Shaila Dhote", img: shailaImg },
            { name: "Karan Misal", img: karanImg },
        ],
    },
    {
        dept: "English",
        icon: "📖",
        color: "#198754",
        teachers: [
            { name: "Arun Mundalik", img: arunImg },
            { name: "Kalpana Deshmukh", img: null },
        ],
    },
    {
        dept: "Sports",
        icon: "⚽",
        color: "#dc3545",
        teachers: [
            { name: "Anil Narwade", img: anilImg },
            { name: "Darshan Borde", img: darshanImg },
        ],
    },
    {
        dept: "Computer",
        icon: "💻",
        color: "#6f42c1",
        teachers: [
            { name: "Nivedita Zalte", img: null },
        ],
    },
    {
        dept: "Marathi",
        icon: "📜",
        color: "#b49c78",
        teachers: [
            { name: "Manisha Deshmukh", img: null },
        ],
    },
    {
        dept: "Mathematics",
        icon: "📐",
        color: "#fd7e14",
        teachers: [
            { name: "Survarna Deshmukh", img: null },
            { name: "Vaishnavi Aasabe", img: null },
            { name: "Komal Deshmukh", img: null },
        ],
    },
    {
        dept: "Hindi",
        icon: "🕉️",
        color: "#20c997",
        teachers: [
            { name: "Aasma Madam", img: null },
        ],
    },
    {
        dept: "Arts",
        icon: "🎨",
        color: "#e83e8c",
        teachers: [
            { name: "Nikita Bhise", img: null },
        ],
    },
];

const totalTeachers = departments.reduce((sum, d) => sum + d.teachers.length, 0);

export default function Faculty() {
    return (
        <section style={{ background: "#F8F9FA", padding: "3rem 1rem", borderTop: "1px solid #e0d5c5" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 8 }}>
                        OUR TEAM
                    </div>
                    <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 12 }}>
                        Meet Our Faculty
                    </h2>
                    <div style={{ width: 48, height: 3, background: "linear-gradient(135deg,#b49c78,#9c8664)", margin: "0 auto 14px", borderRadius: 2 }} />
                    <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 14, lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
                        Our dedicated teachers inspire, guide and nurture every student with care and commitment.
                    </p>
                </div>

                {/* Department list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {departments.map((dept, i) => (
                        <div key={i} style={{
                            background: "#fff",
                            border: "1px solid #e0d5c5",
                            borderLeft: `4px solid ${dept.color}`,
                            borderRadius: 12,
                            padding: "1.25rem 1.5rem",
                        }}>
                            {/* Dept header row */}
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.1rem" }}>
                                <span style={{ fontSize: 20 }}>{dept.icon}</span>
                                <span style={{ fontFamily: "Georgia,serif", fontWeight: 800, color: dept.color, fontSize: 15, letterSpacing: 0.5 }}>
                                    {dept.dept}
                                </span>
                                <span style={{
                                    marginLeft: "auto",
                                    background: `${dept.color}18`,
                                    border: `1px solid ${dept.color}44`,
                                    borderRadius: 20, padding: "2px 10px",
                                    color: dept.color, fontFamily: "Georgia,serif",
                                    fontSize: 11, fontWeight: 700
                                }}>
                                    {dept.teachers.length} {dept.teachers.length === 1 ? "Teacher" : "Teachers"}
                                </span>
                            </div>

                            {/* Teachers row — wrap naturally on mobile */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                {dept.teachers.map((t, j) => (
                                    <div key={j} style={{
                                        display: "flex", alignItems: "center", gap: 10,
                                        background: "#F8F9FA",
                                        border: "1px solid #e0d5c5",
                                        borderRadius: 50,
                                        padding: "6px 14px 6px 6px",
                                        minWidth: 0
                                    }}>
                                        {/* Avatar */}
                                        <div style={{
                                            width: 40, height: 40, borderRadius: "50%",
                                            border: `2px solid ${dept.color}`,
                                            overflow: "hidden", flexShrink: 0,
                                            background: `${dept.color}18`,
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}>
                                            {t.img
                                                ? <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                : <span style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 15, color: dept.color }}>
                                                    {t.name.charAt(0)}
                                                </span>
                                            }
                                        </div>
                                        {/* Name */}
                                        <span style={{
                                            fontFamily: "Georgia,serif", fontSize: 13,
                                            fontWeight: 600, color: "#212529",
                                            whiteSpace: "nowrap"
                                        }}>
                                            {t.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom strip */}
                <div style={{
                    marginTop: "2rem",
                    background: "linear-gradient(135deg,#212529,#495057)",
                    borderRadius: 12, padding: "1.25rem 2rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 12, flexWrap: "wrap", textAlign: "center"
                }}>
                    <span style={{ fontSize: 22 }}>👨‍🏫</span>
                    <span style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 16 }}>
                        {totalTeachers}+ Dedicated Faculty Members
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Georgia,serif", fontSize: 13 }}>
                        — shaping the future of every child at Rashtramata Jijau School
                    </span>
                </div>

            </div>

            {/* Responsive style */}
            <style>{`
        @media (max-width: 480px) {
          .faculty-teacher-pill span:last-child { font-size: 12px; }
        }
      `}</style>
        </section>
    );
}