// ── Faculty.jsx ───────────────────────────────────────────────────────────────
// Save to: D:\SchoolProject\school-frontend\src\Faculty.jsx

import karanImg from "./assets/KaranMisal.jpeg";
import anilImg from "./assets/AnilNarwade.jpeg";
import shailaImg from "./assets/ShailaDhole.jpeg";
import arunImg from "./assets/ArunMundalik.jpeg";
import krushnaImg from "./assets/KrushnaDeshmukh.jpeg";
import kalpanaImg from "./assets/KalpanaDeshmukh.png";
import manishaImg from "./assets/ManishaDeshmukh.png";
import suvarnaImg from "./assets/SuvarnaDeshmukh.png";
import niveditaImg from "./assets/NiveditaZalte.png";
import aasmaImg from "./assets/Aasma.png";
import principalImg from "./assets/Pincipal.jpeg";
import shubhangiImg from "./assets/ShubhangiJoshi.png";
import nehaJImg from "./assets/NehaJadhav.png";
import poojaImg from "./assets/Pooja.png";
import IteImg from "./assets/Eete.png";

// ─── Grouped by Subject ──────────────────────────────────────────────────────
const departments = [
    //{
    //    dept: "Administration",
    //    icon: "🏫",
    //    color: "#f0b429",
    //    bg: "#fff8e7",
    //    teachers: [
    //        { sr: 1, name: "Deepa Sahebrao Wagh", designation: "Principal", qualification: "B.Sc, MA, B.Ed", img: principalImg },
    //    ],
    //},
    {
        dept: "Science",
        icon: "🔬",
        color: "#0d6efd",
        bg: "#e8f4fd",
        teachers: [
            { sr: 2, name: "Shaila Shankarrao Dhote", designation: "Asst. Teacher", qualification: "M.Sc, B.Sc, B.Ed, D.Ed", img: shailaImg },
            { sr: 13, name: "Komal Arunrao Gawande", designation: "Ass. Teacher", qualification: "M.Sc (Chem), B.Ed", img: null },
            { sr: 18, name: "Shubhangi Devidas Joshi", designation: "Ass. Teacher", qualification: "M.Sc", img: shubhangiImg },
        ],
    },
    {
        dept: "Mathematics",
        icon: "📐",
        color: "#fd7e14",
        bg: "#fff3e0",
        teachers: [
            { sr: 4, name: "Suvarna Ramrao Deshmukh", designation: "Asst. Teacher", qualification: "B.Sc, B.Ed, D.Ed", img: suvarnaImg },
            { sr: 14, name: "Kalyani Dhananjay Deshmukh", designation: "Ass. Teacher", qualification: "M.Sc (Math), B.Ed", img: null },
            { sr: 22, name: "Komal Kailas Deshmukh", designation: "Ass. Teacher", qualification: "M.Sc Math, D.El.Ed", img: null },
            { sr: 23, name: "Bhagyashree Dhondge", designation: "Ass. Teacher", qualification: "M.Sc Math, B.Ed, D.Ted", img: null },
        ],
    },
    {
        dept: "Marathi",
        icon: "📜",
        color: "#b49c78",
        bg: "#fdf3e7",
        teachers: [
            { sr: 3, name: "Kalpana Kisanrao Deshmukh", designation: "Asst. Teacher", qualification: "MA, B.Ed, D.Ed", img: kalpanaImg },
            { sr: 6, name: "Reeta Narayanrao Deshmukh", designation: "Asst. Teacher", qualification: "MA, D.Ed", img: null },
            { sr: 7, name: "Manisha Sudhakar Deshmukh", designation: "Ass. Teacher", qualification: "MA, B.Ed, D.Ed", img: manishaImg },
            { sr: 15, name: "Neha Bhalchndra Phadnis", designation: "Asst. Teacher", qualification: "MA (Mar), D.Ed", img: null },
        ],
    },
    {
        dept: "English",
        icon: "📖",
        color: "#198754",
        bg: "#e8f5e9",
        teachers: [
            { sr: 5, name: "Mr. Arun Dattatrey Mundlik", designation: "Asst. Teacher", qualification: "BA, Eng, D.Ed", img: arunImg },
        ],
    },
    {
        dept: "Hindi",
        icon: "🕉️",
        color: "#20c997",
        bg: "#e0f7fa",
        teachers: [
            { sr: 8, name: "Aasma Jamir Sayyad", designation: "Ass. Teacher", qualification: "BA, D.Ed", img: aasmaImg },
            { sr: 16, name: "Sadhana Santosh Ite", designation: "Ass. Teacher", qualification: "BA, B.Ed", img: IteImg },
        ],
    },
    {
        dept: "Sports & PT",
        icon: "⚽",
        color: "#dc3545",
        bg: "#fce4ec",
        teachers: [
            { sr: 10, name: "Anil Uttam Narwade", designation: "PT Teacher", qualification: "MA, B.Ed, BP.ED", img: anilImg },
        ],
    },
    {
        dept: "Arts & Drawing",
        icon: "🎨",
        color: "#e83e8c",
        bg: "#fce4f6",
        teachers: [
            { sr: 9, name: "Jayshree Sanjay Sapkal", designation: "Ass. Teacher", qualification: "BA, DT.Ed", img: null },
            { sr: 11, name: "Sarika Sitaram Bharad", designation: "Drawing Teacher", qualification: "ATD", img: null },
            { sr: 25, name: "Pooja Khadke", designation: "Ass. Teacher", qualification: "BA (Appear), D.Ed", img: poojaImg },
        ],
    },
    {
        dept: "Computer",
        icon: "💻",
        color: "#6f42c1",
        bg: "#ede7f6",
        teachers: [
            { sr: 12, name: "Nivedita Ratnakar Zalte", designation: "Ass. Teacher", qualification: "M.Sc", img: niveditaImg },
            { sr: 21, name: "Dhananshri Wankhede", designation: "Ass. Teacher", qualification: "B.E", img: null },
        ],
    },
    {
        dept: "Commerce",
        icon: "📊",
        color: "#0288d1",
        bg: "#e3f2fd",
        teachers: [
            { sr: 17, name: "Krushnarao P. Deshmukh", designation: "Ass. Teacher", qualification: "M.Com, GDCA, D.El.Ed", img: krushnaImg },
            { sr: 19, name: "Neha Chandrapal Jadhav", designation: "Ass. Teacher", qualification: "B.Com", img: nehaJImg },
            { sr: 20, name: "Shitla Sitaram Ubale", designation: "Ass. Teacher", qualification: "M.Com, GDCA", img: null },
            { sr: 24, name: "Anita Bavane", designation: "Ass. Teacher", qualification: "B.Com", img: null },
        ],
    },
];

const totalTeachers = departments.reduce((s, d) => s + d.teachers.length, 0);

function Avatar({ name, img, color }) {
    return (
        <div style={{
            width: 60, height: 60, borderRadius: "50%",
            border: `3px solid ${color}`,
            overflow: "hidden", flexShrink: 0,
            background: `${color}18`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 2px 8px ${color}33`,
        }}>
            {img
                ? <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <span style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 20, color }}>
                    {name.replace(/^Mr\.\s*|^Mrs\.\s*/i, "").charAt(0)}
                </span>
            }
        </div>
    );
}

function TeacherCard({ teacher, color }) {
    return (
        <div style={{
            background: "#fff",
            border: `1px solid ${color}2a`,
            borderRadius: 12,
            padding: "0.9rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: 12,
            transition: "transform 0.18s, box-shadow 0.18s",
        }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 6px 18px ${color}28`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <Avatar name={teacher.name} img={teacher.img} color={color} />
            <div style={{ minWidth: 0 }}>
                {/* SR badge + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3, flexWrap: "wrap" }}>
                    <span style={{
                        background: color, color: "#fff",
                        borderRadius: "50%", width: 17, height: 17, minWidth: 17,
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 800, fontFamily: "Georgia,serif",
                    }}>{teacher.sr}</span>
                    <span style={{
                        fontFamily: "Georgia,serif", fontWeight: 800,
                        fontSize: 13, color: "#212529", lineHeight: 1.3,
                    }}>{teacher.name}</span>
                </div>
                {/* Designation */}
                <div style={{
                    display: "inline-block",
                    background: `${color}18`, border: `1px solid ${color}44`,
                    borderRadius: 20, padding: "2px 9px", marginBottom: 4,
                    color, fontSize: 10, fontWeight: 700, fontFamily: "Georgia,serif",
                }}>{teacher.designation}</div>
                {/* Qualification */}
                <div style={{ color: "#6C757D", fontSize: 11, fontFamily: "Georgia,serif", lineHeight: 1.4 }}>
                    🎓 {teacher.qualification}
                </div>
            </div>
        </div>
    );
}

export default function Faculty() {
    return (
        <section style={{ background: "#F8F9FA", padding: "3rem 1rem 4rem", borderTop: "1px solid #e0d5c5" }}>

            <style>{`
        .dept-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .teacher-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 860px) {
          .dept-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .teacher-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 8, textTransform: "uppercase" }}>
                        Teaching &amp; Non-Teaching Staff 2023–24
                    </div>
                    <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, marginBottom: 12 }}>
                        Meet Our Faculty
                    </h2>
                    <div style={{ width: 56, height: 3, background: "linear-gradient(135deg,#b49c78,#9c8664)", margin: "0 auto 14px", borderRadius: 2 }} />
                    <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 14, lineHeight: 1.8, maxWidth: 580, margin: "0 auto" }}>
                        Our dedicated teachers inspire, guide and nurture every student — grouped by subject department.
                    </p>
                </div>

                {/* ── Subject Groups ── */}
                <div className="dept-grid">
                    {departments.map((dept, i) => (
                        <div key={i} style={{
                            background: "#fff",
                            border: `1px solid ${dept.color}44`,
                            borderTop: `5px solid ${dept.color}`,
                            borderRadius: 16,
                            overflow: "hidden",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        }}>
                            {/* Subject Header */}
                            <div style={{
                                background: dept.bg,
                                padding: "0.85rem 1.2rem",
                                display: "flex", alignItems: "center", gap: 10,
                                borderBottom: `1px solid ${dept.color}33`,
                            }}>
                                <span style={{ fontSize: 22 }}>{dept.icon}</span>
                                <span style={{
                                    fontFamily: "Georgia,serif", fontWeight: 800,
                                    color: dept.color, fontSize: 16, flex: 1,
                                }}>{dept.dept}</span>
                                <span style={{
                                    background: dept.color, color: "#fff",
                                    borderRadius: 20, padding: "2px 12px",
                                    fontSize: 11, fontWeight: 800, fontFamily: "Georgia,serif", whiteSpace: "nowrap",
                                }}>
                                    {dept.teachers.length} {dept.teachers.length === 1 ? "Teacher" : "Teachers"}
                                </span>
                            </div>

                            {/* Teacher Cards */}
                            <div style={{ padding: "1rem" }}>
                                <div className="teacher-grid">
                                    {dept.teachers.map((t, j) => (
                                        <TeacherCard key={j} teacher={t} color={dept.color} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom Banner ── */}
                <div style={{
                    marginTop: "2.5rem",
                    background: "linear-gradient(135deg,#212529,#495057)",
                    borderRadius: 16, padding: "2rem",
                    textAlign: "center"
                }}>
                    <div style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
                        👨‍🏫 35+ Dedicated Faculty Members
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Georgia,serif", fontSize: 13 }}>
                        Working together to shape the future of every child at Rashtramata Jijau School
                    </div>
                </div>

            </div>
        </section>
    );
}