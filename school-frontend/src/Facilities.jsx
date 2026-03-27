// ── Facilities.jsx ────────────────────────────────────────────────────────────
// Save to: D:\SchoolProject\school-frontend\src\Facilities.jsx
// Copy all facility_photos2 images to: D:\SchoolProject\school-frontend\src\assets\

import heritageImg from "./assets/facility_heritage.jpg";
import scienceImg from "./assets/facility_science.jpg";
import libraryImg from "./assets/facility_library.jpg";
import classroomImg from "./assets/facility_classroom.jpg";
import healthImg from "./assets/facility_health.jpg";
import handwashImg from "./assets/facility_handwash.jpg";
import computerImg from "./assets/facility_computer.jpg";
import digitalImg from "./assets/facility_digital.jpg";
import environmentImg from "./assets/facility_environment.jpg";
import library2Img from "./assets/facility_library2.jpg";
import CCTVimg from "./assets/school_cctv.jpeg";
import Busimg from "./assets/bus.png";


const facilities = [
    {
        img: computerImg,
        icon: "💻",
        tag: "ICT FACILITY",
        title: "आय. सी. टी. पायाभूत सुविधा",
        titleEn: "Computer Lab & ICT Infrastructure",
        desc: "Fully equipped computer laboratory with individual workstations, projectors, smart boards and biometric attendance system. Students get hands-on digital learning experience preparing them for the modern world.",
        badges: ["Computer Lab", "Smart Projector", "Biometric System", "ICT Learning"],
        color: "#0d6efd",
        bg: "#e7f1ff",
    },
    {
        img: digitalImg,
        icon: "📽️",
        tag: "DIGITAL CLASSROOM",
        title: "शैक्षणिक साधनसामुग्री",
        titleEn: "Digital Classrooms & Audio-Visual Tools",
        desc: "Modern digital classrooms equipped with projectors, screens and audio-visual teaching aids. Teachers use technology to make learning interactive and engaging for every student at every level.",
        badges: ["Projectors", "Audio Visual", "Smart Teaching", "Digital Tools"],
        color: "#6f42c1",
        bg: "#e8d5ff",
    },
    {
        img: classroomImg,
        icon: "🏫",
        tag: "CLASSROOMS & LABS",
        title: "शालेतील वर्गखोल्या व प्रयोगशाळा",
        titleEn: "Spacious Classrooms & Science Laboratory",
        desc: "Well-ventilated, spacious classrooms with proper seating for all students. A dedicated science laboratory equipped with all necessary instruments for practical experiments and scientific learning.",
        badges: ["Spacious Rooms", "Science Lab", "UDISE Certified", "Well Equipped"],
        color: "#198754",
        bg: "#d1e7dd",
    },
    {
        img: libraryImg,
        icon: "📚",
        tag: "LIBRARY",
        title: "शालेत ग्रंथालय / वाचन कोपरे",
        titleEn: "School Library & Reading Corners",
        desc: "A well-stocked school library with hundreds of books across subjects, with dedicated reading corners inside and outside classrooms. Students enjoy reading time individually and in groups under the trees.",
        badges: ["Well Stocked", "Reading Corners", "Outdoor Reading", "Book Bank"],
        color: "#b49c78",
        bg: "rgba(180,156,120,0.15)",
    },
    {
        img: library2Img,
        icon: "📖",
        tag: "LIBRARY & ASSESSMENT",
        title: "ग्रंथालयांचा उपयोग, विद्यार्थी मूल्यमापन",
        titleEn: "Library Use & Student Assessment",
        desc: "Students actively use the library for research and textbook reading. Regular assessments and examinations are conducted in well-organized classrooms to monitor academic progress of every student.",
        badges: ["Regular Tests", "Student Evaluation", "Textbook Bank", "Academic Tracking"],
        color: "#fd7e14",
        bg: "#ffe5d0",
    },
    {
        img: scienceImg,
        icon: "🔬",
        tag: "SCIENCE EDUCATION",
        title: "वैज्ञानिक दृष्टिकोन वृद्धिंगत",
        titleEn: "Scientific Thinking & Outdoor Learning",
        desc: "Teachers conduct outdoor science sessions using plants, nature and real-world examples to develop scientific thinking in students. Practical, hands-on learning approach makes science accessible and exciting for all.",
        badges: ["Outdoor Learning", "Scientific Thinking", "Nature Study", "Practical Science"],
        color: "#20c997",
        bg: "#d1f5ea",
    },
    {
        img: heritageImg,
        icon: "🏛️",
        tag: "HERITAGE & CULTURE",
        title: "ऐतिहासिक वास्तू जतन / भारतीय सांस्कृतिक वारसा जतन",
        titleEn: "Historical Heritage & Cultural Conservation",
        desc: "Stunning large murals of Indian heritage monuments — Taj Mahal, Gateway of India, Ajanta Caves, Sanchi Stupa, Golden Temple — painted across school boundary walls. Students learn national pride and cultural heritage through art every single day.",
        badges: ["Heritage Murals", "Taj Mahal", "Ajanta Caves", "Cultural Pride"],
        color: "#dc3545",
        bg: "#f8d7da",
    },
    {
        img: environmentImg,
        icon: "🌈",
        tag: "CLASSROOM DECORATION",
        title: "अडथळामुक्त वातावरण, शालेय आनंददायी वातावरण",
        titleEn: "Barrier-Free & Joyful School Environment",
        desc: "Students actively participate in decorating their classrooms with colourful artwork, banners, posters and creative displays. Talking walls, themed classroom doors and student-made decorations create a warm, welcoming and inspiring learning space.",
        badges: ["Talking Walls", "Student Art", "Class Decor", "Inclusive Space"],
        color: "#e83e8c",
        bg: "#fce4f0",
    },
    {
        img: handwashImg,
        icon: "🚿",
        tag: "CLEANLINESS & HYGIENE",
        title: "स्वच्छता विषयक स्थिती",
        titleEn: "Hygiene, Handwash & Sanitation Facilities",
        desc: "Dedicated handwash stations with running water, sanitizer dispensers, clean drinking water supply and well-maintained hygienic toilets. The school has 492 students enrolled with separate toilet facilities — all maintained to the highest standards of cleanliness.",
        badges: ["Handwash Stations", "Clean Toilets", "492 Students", "Sanitizer Points"],
        color: "#0dcaf0",
        bg: "#cff4fc",
    },
    {
        img: healthImg,
        icon: "🏥",
        tag: "HEALTH & WELLNESS",
        title: "दारिक आरोग्य तपासणी 2024",
        titleEn: "Annual Health Check-Up Program 2024",
        desc: "Annual health check-up camp organized on 10 August 2024 for all students. Medical professionals visited the school to conduct health screenings, vision tests and general wellness assessments — ensuring every child stays healthy and fit.",
        badges: ["Health Camp 2024", "Medical Check-up", "Vision Test", "Student Wellness"],
        color: "#198754",
        bg: "#d1e7dd",
    },
    {
        img: CCTVimg,
        icon: "📷",
        tag: "SECURITY",
        title: "सुरक्षा कॅमेरा प्रणाली",
        titleEn: "CCTV Security Camera System",
        desc: "The entire school campus is monitored by a CCTV security camera surveillance system. All classrooms, corridors, entry and exit points are covered — ensuring 100% safety and security of every student and staff member at all times.",
        badges: ["CCTV Cameras", "24/7 Monitoring", "All Classrooms", "Campus Security"],
        color: "#212529",
        bg: "#e9ecef",
    },
    {
        img: Busimg,
        icon: "🚌",
        tag: "TRANSPORT",
        title: "शालेय बस वाहतूक सेवा",
        titleEn: "School Bus Transport Service",
        desc: "Safe and reliable school bus transport service available for students across Chikhli and surrounding areas. Buses follow fixed routes with experienced drivers ensuring every child reaches school and returns home safely every day.",
        badges: ["School Bus", "Safe Transport", "Fixed Routes", "All Areas Covered"],
        color: "#fd7e14",
        bg: "#ffe5d0",
    },
];

export default function Facilities({ setActive }) {
    return (
        <section style={{ background: "#F8F9FA", padding: "4rem 2rem", minHeight: "100vh" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: "4rem" }}>

                {/* Page Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>
                        OUR SCHOOL
                    </div>
                    <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginBottom: 14 }}>
                        School Facilities
                    </h1>
                    <div style={{ width: 55, height: 3, background: "linear-gradient(135deg,#b49c78,#9c8664)", margin: "0 auto 20px", borderRadius: 2 }} />
                    <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 15, lineHeight: 1.9, maxWidth: 640, margin: "0 auto" }}>
                        Rashtramata Jijau School provides a modern, safe and joyful learning environment — equipped with technology, clean facilities, cultural spaces and holistic development programs for every student.
                    </p>
                </div>

                {/* ONE FACILITY PER ROW */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                    {facilities.map((f, i) => (
                        <div key={i} style={{
                            background: "#fff",
                            border: "1px solid #e0d5c5",
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 6px 32px rgba(0,0,0,0.08)",
                        }}>

                            {/* BIG IMAGE — full image, no crop / placeholder if no photo */}
                            <div style={{ position: "relative", width: "100%" }}>
                                {f.img ? (
                                    <img
                                        src={f.img}
                                        alt={f.titleEn}
                                        style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                                    />
                                ) : (
                                    /* Placeholder when no photo available */
                                    <div style={{
                                        width: "100%", height: 320,
                                        background: `linear-gradient(135deg, ${f.bg}, ${f.color}22)`,
                                        border: `2px dashed ${f.color}66`,
                                        display: "flex", flexDirection: "column",
                                        alignItems: "center", justifyContent: "center",
                                        gap: 16
                                    }}>
                                        <div style={{ fontSize: 72 }}>{f.icon}</div>
                                        <div style={{
                                            color: f.color, fontFamily: "Georgia,serif",
                                            fontSize: 16, fontWeight: 700, letterSpacing: 1
                                        }}>
                                            {f.titleEn}
                                        </div>
                                        <div style={{
                                            background: f.color, color: "#fff",
                                            borderRadius: 20, padding: "6px 18px",
                                            fontFamily: "Georgia,serif", fontSize: 12,
                                            letterSpacing: 1
                                        }}>
                                            📷 Photo Coming Soon
                                        </div>
                                    </div>
                                )}
                                {/* Tag top-left */}
                                <div style={{
                                    position: "absolute", top: 18, left: 18,
                                    background: f.img ? "rgba(0,0,0,0.65)" : f.color,
                                    backdropFilter: "blur(6px)",
                                    color: "#fff", borderRadius: 30,
                                    padding: "7px 18px",
                                    fontSize: 11, letterSpacing: 2,
                                    fontFamily: "Georgia,serif", fontWeight: 700
                                }}>
                                    {f.icon}  {f.tag}
                                </div>
                                {/* Number badge top-right */}
                                <div style={{
                                    position: "absolute", top: 18, right: 18,
                                    background: f.color,
                                    color: "#fff", borderRadius: "50%",
                                    width: 42, height: 42,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 17,
                                    boxShadow: `0 4px 12px ${f.color}66`
                                }}>
                                    {i + 1}
                                </div>
                            </div>

                            {/* TEXT CONTENT */}
                            <div style={{ padding: "2.5rem 3rem 3rem" }}>

                                {/* Color accent */}
                                <div style={{ width: 55, height: 4, background: f.color, borderRadius: 2, marginBottom: 20 }} />

                                {/* Marathi title */}
                                <h2 style={{
                                    fontFamily: "Georgia,serif", fontWeight: 800,
                                    color: "#212529", fontSize: "clamp(1.2rem,3vw,1.75rem)",
                                    marginBottom: 8, lineHeight: 1.35
                                }}>
                                    {f.title}
                                </h2>

                                {/* English subtitle */}
                                <div style={{
                                    fontFamily: "Georgia,serif", color: f.color,
                                    fontSize: 14, fontWeight: 600,
                                    letterSpacing: 0.5, marginBottom: 20
                                }}>
                                    {f.titleEn}
                                </div>

                                {/* Description */}
                                <p style={{
                                    color: "#495057", fontFamily: "Georgia,serif",
                                    fontSize: 15, lineHeight: 2, marginBottom: 28
                                }}>
                                    {f.desc}
                                </p>

                                {/* Badges */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                    {f.badges.map((b, j) => (
                                        <span key={j} style={{
                                            background: f.bg,
                                            border: `1px solid ${f.color}55`,
                                            borderRadius: 30, padding: "7px 18px",
                                            fontSize: 12, color: f.color,
                                            fontFamily: "Georgia,serif", fontWeight: 700,
                                        }}>
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    marginTop: "5rem",
                    background: "linear-gradient(135deg,#212529,#495057)",
                    borderRadius: 20, padding: "3.5rem 2.5rem",
                    textAlign: "center"
                }}>
                    <div style={{ fontSize: 40, marginBottom: 18 }}>🏫</div>
                    <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 24, marginBottom: 14 }}>
                        Want to See Our Facilities in Person?
                    </h3>
                    <p style={{
                        color: "rgba(255,255,255,0.78)", fontFamily: "Georgia,serif",
                        fontSize: 15, lineHeight: 1.9,
                        maxWidth: 480, margin: "0 auto 28px"
                    }}>
                        Schedule a free campus visit — come see everything with your own eyes and decide for your child's bright future!
                    </p>
                    <button
                        onClick={() => { setActive("Appointment"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        style={{
                            display: "inline-block",
                            background: "linear-gradient(135deg,#b49c78,#9c8664)",
                            color: "#fff", borderRadius: 10,
                            padding: "15px 44px",
                            border: "none", cursor: "pointer",
                            fontFamily: "Georgia,serif", fontSize: 15,
                            letterSpacing: 1,
                            boxShadow: "0 4px 20px rgba(180,156,120,0.4)"
                        }}>
                        📋 Book a Free Campus Visit
                    </button>
                </div>

            </div>
        </section>
    );
}