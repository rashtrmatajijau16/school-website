import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import heroBg from "./assets/BACKGROUND.jpeg";
import chairmanImg from "./assets/chairman.jpeg";
import principalImg from "./assets/Pincipal.png";
import babyStudent from "./assets/babystudent.jpeg";
import sirStudent from "./assets/sirstd.jpeg";
import AdminDashboard from "./AdminDashboard";
import AppointmentStatus from "./AppointmentStatus";
import { FaInstagram } from "react-icons/fa";
import { AchievementsPage, AchievementsHomeSection } from "./Achievements";
import Faculty from "./Faculty";
import mukhyaMantriaward from "./assets/MukhyaMantriaward.jpeg";
import mukhyaMantriImg from "./assets/MukhyaMantriaward.jpeg";
import Facilities from "./Facilities";
import vaishaliImg from "./assets/VaishaliDeshmukh.jpeg";
import kishorImg from "./assets/KishorDahiwal.jpeg";
import kamalImg from "./assets/KamalkishorLandage.jpeg";
import raghunathImg from "./assets/RaghunathPawal.jpeg";
import chetanImg from "./assets/ChetanDeshmukh.jpeg";
import sunilImg from "./assets/SunilDeshmukh.jpeg";
import manishaRohanImg from "./assets/ManishaRohanDeshmukh.jpeg";
import jyotiImg from "./assets/JyotiDeshmukh.jpeg";
const API = "http://localhost:5000/api";

async function post(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

function Navbar({ active, setActive }) {
    const [open, setOpen] = useState(false);
    const links = ["Home", "About", "Facilities", "Achievements", "Appointment", "Status", "Contact", "Admin"];
    const icons = { Home: "🏠", About: "ℹ️", Facilities: "🏫", Achievements: "🏆", Appointment: "📋", Status: "🔍", Contact: "📞", Admin: "🔐" };

    const go = (l) => { setActive(l); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                background: "#fff", borderBottom: "1px solid #e0d5c5",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0 1.5rem", height: 64, boxSizing: "border-box"
            }}>
                {/* Logo */}
                <div onClick={() => go("Home")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}>
                    <img src={logo} alt="Logo" style={{ width: 42, height: 42, objectFit: "contain" }} />
                    <div>
                        <div style={{ color: "#b49c78", fontWeight: 800, fontSize: 12, fontFamily: "Georgia,serif", letterSpacing: 1 }}>RASHTRAMATA JIJAU</div>
                        <div style={{ color: "#6C757D", fontSize: 9, letterSpacing: 2, fontFamily: "Georgia,serif" }}>ENGLISH SCHOOL & JR. COLLEGE</div>
                    </div>
                </div>

                {/* Desktop links - hidden on mobile */}
                <div className="rj-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {links.map(l => (
                        <button key={l} onClick={() => go(l)} style={{
                            background: "none", border: "none", cursor: "pointer",
                            color: active === l ? "#b49c78" : "#495057",
                            fontFamily: "Georgia,serif", fontSize: 12, letterSpacing: 0.5,
                            borderBottom: active === l ? "2px solid #b49c78" : "2px solid transparent",
                            paddingBottom: 2, transition: "all .2s", whiteSpace: "nowrap"
                        }}>{l}</button>
                    ))}
                    <a href="tel:+919373918838" style={{
                        background: "#b49c78", color: "#fff", borderRadius: 4,
                        padding: "6px 12px", fontFamily: "Georgia,serif", fontSize: 11,
                        textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0
                    }}>📞 93739 18838</a>
                </div>

                {/* Hamburger button - shown only on mobile */}
                <button className="rj-hamburger" onClick={() => setOpen(o => !o)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: 8, display: "none", flexDirection: "column", gap: 5, flexShrink: 0
                }}>
                    <span style={{ display: "block", width: 24, height: 2.5, background: "#b49c78", borderRadius: 2, transition: "all .3s", transform: open ? "translateY(7.5px) rotate(45deg)" : "none" }} />
                    <span style={{ display: "block", width: 24, height: 2.5, background: "#b49c78", borderRadius: 2, transition: "all .3s", opacity: open ? 0 : 1 }} />
                    <span style={{ display: "block", width: 24, height: 2.5, background: "#b49c78", borderRadius: 2, transition: "all .3s", transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none" }} />
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            <div style={{
                position: "fixed", top: 64, left: 0, right: 0, zIndex: 999,
                background: "#fff", borderBottom: open ? "1px solid #e0d5c5" : "none",
                boxShadow: open ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
                maxHeight: open ? "600px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.35s ease, box-shadow 0.3s",
            }}>
                <div style={{ padding: "0.5rem 1.5rem 1.25rem" }}>
                    {links.map((l, i) => (
                        <button key={l} onClick={() => go(l)} style={{
                            display: "flex", alignItems: "center", gap: 12,
                            width: "100%", background: active === l ? "rgba(180,156,120,0.08)" : "none",
                            border: "none", cursor: "pointer",
                            color: active === l ? "#b49c78" : "#495057",
                            fontFamily: "Georgia,serif", fontSize: 15,
                            padding: "13px 10px", borderRadius: 8,
                            borderBottom: i < links.length - 1 ? "1px solid #f5f0eb" : "none",
                            textAlign: "left"
                        }}>
                            <span style={{ fontSize: 18, width: 28, textAlign: "center" }}>{icons[l]}</span>
                            <span>{l}</span>
                            {active === l && <span style={{ marginLeft: "auto", color: "#b49c78", fontSize: 10 }}>●</span>}
                        </button>
                    ))}
                    <a href="tel:+919373918838" style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        marginTop: "0.75rem", background: "linear-gradient(135deg,#b49c78,#9c8664)",
                        color: "#fff", borderRadius: 10, padding: "13px",
                        textDecoration: "none", fontFamily: "Georgia,serif", fontSize: 14,
                    }}>
                        📞 Call: +91 93739 18838
                    </a>
                </div>
            </div>

            {/* Tap outside overlay to close menu */}
            {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(0,0,0,0.2)" }} />}

            {/* CSS for responsive switching */}
            <style>{`
                .rj-desktop-nav { display: flex !important; }
                .rj-hamburger { display: none !important; }
                @media (max-width: 900px) {
                    .rj-desktop-nav { display: none !important; }
                    .rj-hamburger { display: flex !important; }
                }
            `}</style>
        </>
    );
}

function Hero({ setActive }) {
    return (
        <section style={{
            minHeight: "100vh",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.55)",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", textAlign: "center", padding: "6rem 2rem 4rem",
            position: "relative", overflow: "hidden"
        }}>
            <div style={{
                display: "inline-block", background: "#FFF",
                border: "1px solid #b49c78", borderRadius: 20,
                padding: "6px 20px", color: "#b49c78", fontSize: 11,
                letterSpacing: 3, fontFamily: "Georgia,serif", marginBottom: "2rem"
            }}>
                ✦ ESTABLISHED 2003 · CHIKHLI, BULDHANA · MAHARASHTRA ✦
            </div>

            <h1 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                color: "#ffffff",
                textShadow: "0 4px 25px rgba(0,0,0,0.7)",
                fontWeight: 900, maxWidth: 800, marginBottom: "1.5rem",
            }}>
                Rashtramata Jijau<br />
                <span style={{ color: "#b49c78" }}>English School</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.85)" }}>&amp; Junior College</span>
            </h1>

            <p style={{
                color: "#ffffff", fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                maxWidth: 580, lineHeight: 1.9, fontFamily: "Georgia,serif",
                marginBottom: "3rem", textShadow: "0 2px 8px rgba(0,0,0,0.5)"
            }}>
                Providing quality English medium education from Nursery to 12th since 2003.
                Nurturing young minds with values, discipline, and academic excellence.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                <button onClick={() => setActive("Appointment")} style={{
                    background: "linear-gradient(135deg,#b49c78,#9c8664)",
                    color: "#fff", border: "none", borderRadius: 6,
                    padding: "14px 36px", fontSize: 15, cursor: "pointer",
                    fontFamily: "Georgia,serif", letterSpacing: 1,
                    boxShadow: "0 4px 20px rgba(180,156,120,0.5)"
                }}>📋 Enroll Now</button>
                <button onClick={() => setActive("About")} style={{
                    background: "transparent", color: "#b49c78",
                    border: "1px solid #b49c78", borderRadius: 6,
                    padding: "14px 36px", fontSize: 15, cursor: "pointer",
                    fontFamily: "Georgia,serif", letterSpacing: 1
                }}>Learn More →</button>
            </div>

            <div style={{ display: "flex", gap: "3rem", marginTop: "5rem", flexWrap: "wrap", justifyContent: "center" }}>
                {[
                    { n: "20+", l: "Years of Excellence" },
                    { n: "100%", l: "Board Results" },
                    { n: "NRS–12", l: "Classes Offered" },
                    { n: "2003", l: "Year Founded" },
                ].map(s => (
                    <div key={s.n} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "2rem", fontWeight: 900, color: "#b49c78", fontFamily: "Georgia,serif" }}>{s.n}</div>
                        <div style={{ color: "#fff", fontSize: 11, letterSpacing: 2, fontFamily: "Georgia,serif" }}>{s.l}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Features() {
    const items = [
        { icon: "📚", title: "Comprehensive Curriculum", desc: "Maharashtra State Board curriculum from Nursery to 12th, structured for academic excellence and overall development." },
        { icon: "🌳", title: "Green Campus", desc: "Surrounded by green spaces creating a calm, inspiring, distraction-free environment for focused learning." },
        { icon: "🎓", title: "Experienced Faculty", desc: "Dedicated and qualified teachers committed to guiding every student towards their highest potential." },
        { icon: "🏆", title: "Consistent Results", desc: "100% board examination results with a track record of academic excellence over two decades." },
        { icon: "🤝", title: "Holistic Development", desc: "Academic, social, and moral development — shaping responsible citizens and future leaders." },
        { icon: "📅", title: "Admissions Open", desc: "Enroll for Academic Year 2026–27. Schedule a free campus visit and admission consultation today." },
    ];
    return (
        <section style={{ background: "#F8F9FA", padding: "6rem 2rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>OUR OFFERINGS</div>
                    <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800 }}>
                        A Comprehensive Learning Environment
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {items.map((item, i) => (
                        <div key={i} style={{
                            background: "#fff", border: "1px solid rgba(180,156,120,0.3)",
                            borderRadius: 12, padding: "2rem", transition: "transform .2s, border-color .2s", cursor: "default",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#b49c78"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(180,156,120,0.3)"; }}
                        >
                            <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{item.icon}</div>
                            <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 10, fontSize: 17 }}>{item.title}</h3>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.7, fontSize: 14 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── School Sections (with real photos) ───────────────────────────────────────
function SchoolSections({ setActive }) {
    return (
        <>
            {/* Section 1 — Interested in enrolling */}
            <section style={{ background: "#fff", padding: "5rem 2rem", borderTop: "1px solid #e0d5c5" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
                        gap: "4rem", alignItems: "center"
                    }}>
                        {/* Left Text */}
                        <div>
                            <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>ADMISSIONS</div>
                            <h2 style={{
                                fontFamily: "Georgia,serif", color: "#212529",
                                fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "1.5rem"
                            }}>
                                Interested in enrolling your child?
                            </h2>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.9, marginBottom: "1rem" }}>
                                Schedule a campus visit for a free admission consultation.
                            </p>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.9, marginBottom: "1rem" }}>
                                We will understand your child's needs and explain our academic programs, facilities, and teaching approach.
                            </p>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.9, marginBottom: "2rem" }}>
                                You are welcome to decide comfortably after the discussion.
                            </p>
                            <button onClick={() => setActive("Appointment")} style={{
                                background: "linear-gradient(135deg,#b49c78,#9c8664)",
                                color: "#fff", border: "none", borderRadius: 6,
                                padding: "12px 28px", fontSize: 14, cursor: "pointer",
                                fontFamily: "Georgia,serif", letterSpacing: 1,
                                boxShadow: "0 4px 16px rgba(180,156,120,0.4)"
                            }}>
                                Find out more
                            </button>
                        </div>

                        {/* Right Image — babystudent.jpeg */}
                        <div style={{
                            border: "3px solid #b49c78",
                            borderRadius: 12, overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(180,156,120,0.25)"
                        }}>
                            <img
                                src={babyStudent}
                                alt="School students"
                                style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 — Looking for the right learning environment */}
            <section style={{ background: "#F8F9FA", padding: "5rem 2rem", borderTop: "1px solid #e0d5c5" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
                        gap: "4rem", alignItems: "center"
                    }}>
                        {/* Left — two images side by side */}
                        <div >
                            <div style={{
                                border: "3px solid #b49c78",
                                borderRadius: 12, overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(180,156,120,0.25)"
                            }}>
                                <img
                                    src={sirStudent}
                                    alt="School students"
                                    style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
                                />
                            </div>
                        </div>

                        {/* Right Text */}
                        <div>
                            <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>OUR ENVIRONMENT</div>
                            <h2 style={{
                                fontFamily: "Georgia,serif", color: "#212529",
                                fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "1.5rem"
                            }}>
                                Looking for the Right Learning Environment for Your Child?
                            </h2>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.9, marginBottom: "1rem" }}>
                                Our experienced educators are here to guide you step by step in selecting the most suitable academic program. We provide thoughtful advice and clear information to help you make the best decision for your child's future.
                            </p>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.9, marginBottom: "2rem" }}>
                                Discover our structured and value-based programs designed to enhance academic excellence and overall development.
                            </p>
                            <button onClick={() => setActive("About")} style={{
                                background: "linear-gradient(135deg,#b49c78,#9c8664)",
                                color: "#fff", border: "none", borderRadius: 6,
                                padding: "12px 28px", fontSize: 14, cursor: "pointer",
                                fontFamily: "Georgia,serif", letterSpacing: 1,
                                boxShadow: "0 4px 16px rgba(180,156,120,0.4)"
                            }}>
                                Explore our programs
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Testimonials() {
    const [list, setList] = useState([
        { id: 1, name: "Mrs. Snehal Patil", role: "Parent", message: "From admission to academic progress, the school management and teachers have been highly supportive and caring. We are extremely satisfied with the quality education and values provided." },
        { id: 2, name: "Mrs. Sonali Lambe", role: "Parent, enrolled a child", message: "From enrollment to graduation, they were exceptionally professional, friendly, and dedicated. We are thrilled with the experience and the school." },
        { id: 3, name: "Michael Johnson", role: "Parent, graduated a child", message: "Positive atmosphere, great teamwork, dedicated staff, and wonderful people! I highly recommend them!" },
    ]);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        fetch(`${API}/testimonials`).then(r => r.json()).then(d => { if (d && d.length) setList(d); }).catch(() => { });
    }, []);

    const t = list[idx];
    return (
        <section style={{ background: "#FFFFFF", padding: "6rem 2rem", textAlign: "center", borderTop: "1px solid #e0d5c5" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>TESTIMONIALS</div>
                <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", marginBottom: "3rem", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>What Parents Say</h2>
                <div style={{
                    background: "#F8F9FA", border: "1px solid #e0d5c5",
                    borderRadius: 16, padding: "3rem", marginBottom: "2rem", minHeight: 160,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
                }}>
                    <p style={{ color: "#495057", fontFamily: "Georgia,serif", fontSize: 15, lineHeight: 2, fontStyle: "italic" }}>"{t.message}"</p>
                    <div style={{ marginTop: "1.5rem" }}>
                        <div style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 700 }}>{t.name}</div>
                        <div style={{ color: "#b49c78", fontSize: 11, letterSpacing: 2, fontFamily: "Georgia,serif" }}>{t.role}</div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                    {list.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)} style={{
                            width: i === idx ? 24 : 8, height: 8, borderRadius: 4,
                            background: "#b49c78", border: "none", cursor: "pointer",
                            opacity: i === idx ? 1 : 0.35,
                            transition: "width .3s, opacity .3s"
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section style={{ background: "#F8F9FA", padding: "4rem 2rem", minHeight: "100vh" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", paddingTop: "4rem" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>WHO WE ARE</div>
                    <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>About Our Institution</h1>
                </div>

                {/* About text */}
                <div style={{ background: "#fff", border: "1px solid #e0d5c5", borderRadius: 16, padding: "2.5rem", marginBottom: "3rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <p style={{ color: "#495057", fontFamily: "Georgia,serif", lineHeight: 2, fontSize: 16 }}>
                        Established in <strong style={{ color: "#b49c78" }}>2003</strong> in Chikhli, Buldhana, Maharashtra,
                        Rashtramata Jijau English School and Junior College is committed to academic excellence, discipline,
                        and value-based education inspired by the ideals of <strong style={{ color: "#b49c78" }}>Rajmata Jijabai</strong>.
                        We provide quality English medium education from Nursery to 12th standard under the Maharashtra State Board curriculum.
                    </p>
                </div>

                {/* Principal & Chairman */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "2rem", marginBottom: "3rem" }}>
                    {[
                        {
                            name: "Mrs. Dipa Wagh",
                            role: "Principal",
                            img: principalImg,
                            desc: `Education is an ornament in prosperity and a refuge in adversity.

                                    My dear students,

                                    We are all born with a divine fire in us. Our efforts should be to give wings to this fire and fill the world with the glow of its goodness.

                                    School is the temple where students can nurture the flame within their being. Wake up your senses, the gateways of knowledge, and let the light of knowledge enter to kindle the divine flame within you.

                                    The thoughts, words, and deeds that you cultivate should fuel the fire within you. Fire purifies everything. Let this fire purify the knowledge gathered through your senses and processed by your mind, to give wings to your dreams and ignite the world with its brilliance.

                                    Let each one of you carve out a unique place in the journey of life through continuous learning and growth. From a small spark can rise a mighty flame.

                                    Education is the manifestation of the perfection already within an individual. Our school will provide all facilities, both curricular and co-curricular, to help you realize and express that perfection.`
                        },
                        {
                            name: "Mr. Panditrao Deshmukh",
                            role: "The President of RJES & Jr. Collage",
                            img: chairmanImg,
                            desc: `The most unlikely events can often turn into the most pleasant surprises.

                                    With a vision to impart quality English-medium education to local children—especially those deprived due to financial challenges—I nurtured a dream of establishing a school where every child could learn with minimal resources. This dream became a reality in 2003 with the establishment of Rashtramata Jijau English School.

                                    The institution has always aimed for excellence, driven not by profit, but by passion and commitment to education. I envisioned a place where children could truly be children—not rote learners—where creativity is encouraged, curiosity is nurtured, and learning happens in a free and inspiring environment.

                                    Over time, this small sapling has grown into Rashtramata Jijau English School & Junior College, bringing immense satisfaction and a sense of fulfillment.

                                    I am grateful for the constant support of my family, colleagues, staff members of Shriram Co-operative Society, and both teaching and non-teaching staff. Their dedication has played a vital role in this journey.

                                    I hope my staff continues to strive forward and remain an integral part of this shared vision and dream.`
                        }
                    ].map((p, i) => (
                        <div key={i} style={{ background: "#fff", border: "1px solid #e0d5c5", borderRadius: 16, padding: "2rem", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                            <div style={{ width: 140, height: 140, borderRadius: "50%", margin: "0 auto 1rem", overflow: "hidden", border: "3px solid #b49c78" }}>
                                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 4 }}>{p.name}</h3>
                            <div style={{ color: "#b49c78", fontSize: 11, letterSpacing: 2, marginBottom: 14, fontFamily: "Georgia,serif" }}>{p.role.toUpperCase()}</div>
                            <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", lineHeight: 1.8, fontSize: 14 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>



                {/* ── BOARD OF DIRECTORS ── */}
                <div style={{ margin: "3rem 0" }}>
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 10 }}>
                            LEADERSHIP
                        </div>
                        <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: 12 }}>
                            Executive Board of Directors
                        </h2>
                        <div style={{ width: 55, height: 3, background: "linear-gradient(135deg,#b49c78,#9c8664)", margin: "0 auto", borderRadius: 2 }} />
                    </div>

                    {/* Board Members Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                        gap: "1.5rem"
                    }}>
                        {[
                            { name: "Mr. Panditrao Deshmukh", role: "President", img: chairmanImg },
                            { name: "Mr. Kishor Dahiwal", role: "Vice President", img: kishorImg },
                            { name: "Mr. Kamalkishor Landage", role: "Secretary", img: kamalImg },
                            { name: "Mr. Sunil Deshmukh", role: "Joint Secretary", img: sunilImg },
                            { name: "Mr. Chetan Deshmukh", role: "Treasurer", img: chetanImg },
                            { name: "Mrs. Vaishali Deshmukh", role: "Member", img: vaishaliImg },
                            { name: "Mr. Raghunath Pawal", role: "Member", img: raghunathImg },
                            { name: "Mrs. Manisha Rohan Deshmukh", role: "Member", img: manishaRohanImg },
                            { name: "Mrs. Jyoti Deshmukh", role: "Member", img: jyotiImg },
                        ].map((m, i) => (
                            <div key={i} style={{
                                background: "#fff",
                                border: "1px solid #e0d5c5",
                                borderTop: "3px solid #b49c78",
                                borderRadius: 14,
                                padding: "1.25rem 1rem",
                                textAlign: "center",
                                boxShadow: "0 2px 12px rgba(180,156,120,0.1)",
                                transition: "transform .2s, box-shadow .2s"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(180,156,120,0.2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(180,156,120,0.1)"; }}
                            >
                                {/* Photo */}
                                <div style={{
                                    width: 90, height: 90,
                                    borderRadius: "50%",
                                    margin: "0 auto 0.75rem",
                                    overflow: "hidden",
                                    border: "3px solid #b49c78",
                                    boxShadow: "0 4px 12px rgba(180,156,120,0.25)"
                                }}>
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                {/* Role badge */}
                                <div style={{
                                    display: "inline-block",
                                    background: "rgba(180,156,120,0.12)",
                                    border: "1px solid #e0d5c5",
                                    borderRadius: 20, padding: "2px 10px",
                                    color: "#9c8664", fontFamily: "Georgia,serif",
                                    fontSize: 10, letterSpacing: 1,
                                    marginBottom: 6, fontWeight: 700
                                }}>
                                    {m.role.toUpperCase()}
                                </div>
                                {/* Name */}
                                <div style={{
                                    color: "#212529", fontFamily: "Georgia,serif",
                                    fontSize: 13, fontWeight: 700, lineHeight: 1.4
                                }}>
                                    {m.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* ── MUKHYA MANTRI AWARD ── */}
                <div style={{
                    margin: "3rem 0",
                    background: "linear-gradient(135deg, #fffbf0, #fff8e6)",
                    border: "2px solid #b49c78",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(180,156,120,0.2)"
                }}>
                    {/* Gold header banner */}
                    <div style={{
                        background: "linear-gradient(135deg,#b49c78,#9c8664)",
                        padding: "1rem 2rem",
                        display: "flex", alignItems: "center", gap: 12
                    }}>
                        <span style={{ fontSize: 28 }}>🏛️</span>
                        <div>
                            <div style={{ color: "#fff", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 14, letterSpacing: 1 }}>
                                GOVERNMENT OF MAHARASHTRA — PRESTIGIOUS AWARD
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2 }}>
                                MUKHYA MANTRI MAZHI SHALA SUNDAR SHALA PURASKAR
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{
                        display: "flex", flexWrap: "wrap",
                        gap: "2rem", padding: "2rem",
                        alignItems: "center"
                    }}>
                        {/* Award Photo */}
                        <div style={{
                            flex: "0 0 auto",
                            width: 280,
                            borderRadius: 14,
                            overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(180,156,120,0.3)",
                            border: "3px solid #b49c78"
                        }}>
                            <img
                                src={mukhyaMantriImg}
                                alt="Mukhya Mantri Mazhi Shala Sundar Shala Puraskar"
                                style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                            />
                        </div>

                        {/* Award Details */}
                        <div style={{ flex: 1, minWidth: 220 }}>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                background: "rgba(180,156,120,0.15)",
                                border: "1px solid #b49c78",
                                borderRadius: 20, padding: "4px 14px",
                                marginBottom: "1rem"
                            }}>
                                <span style={{ fontSize: 14 }}>🏆</span>
                                <span style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>
                                    GOVERNMENT RECOGNITION
                                </span>
                            </div>

                            <h3 style={{
                                fontFamily: "Georgia,serif", color: "#212529",
                                fontSize: "clamp(1.1rem,2.5vw,1.5rem)",
                                fontWeight: 800, marginBottom: "1rem", lineHeight: 1.4
                            }}>
                                Mukhya Mantri Mazhi Shala<br />
                                <span style={{ color: "#b49c78" }}>Sundar Shala Puraskar</span>
                            </h3>

                            <p style={{
                                color: "#6C757D", fontFamily: "Georgia,serif",
                                fontSize: 14, lineHeight: 1.9, marginBottom: "1.25rem"
                            }}>
                                Rashtramata Jijau English School & Junior College has been
                                honoured with the prestigious <strong style={{ color: "#b49c78" }}>Mukhya Mantri Mazhi Shala
                                Sundar Shala Puraskar</strong> — an initiative by the
                                Government of Maharashtra recognizing schools for excellence
                                in infrastructure, cleanliness, and overall development.
                            </p>

                            {/* Badges */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {[
                                    { icon: "🏛️", text: "Govt. of Maharashtra" },
                                    { icon: "✨", text: "Excellence Award" },
                                    { icon: "🌿", text: "Sundar Shala" },
                                    { icon: "📜", text: "Official Recognition" },
                                ].map((b, i) => (
                                    <div key={i} style={{
                                        display: "flex", alignItems: "center", gap: 6,
                                        background: "#fff", border: "1px solid #e0d5c5",
                                        borderRadius: 20, padding: "5px 12px",
                                        boxShadow: "0 2px 8px rgba(180,156,120,0.1)"
                                    }}>
                                        <span style={{ fontSize: 14 }}>{b.icon}</span>
                                        <span style={{ color: "#495057", fontFamily: "Georgia,serif", fontSize: 11, fontWeight: 600 }}>{b.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

{/*/                */}{/* ── MUKHYA MANTRI AWARD SECTION ── */}
{/*                <div style={{*/}
{/*                    margin: "3rem 0",*/}
{/*                    background: "linear-gradient(135deg, #fff9f0, #fff3e0)",*/}
{/*                    border: "2px solid #b49c78",*/}
{/*                    borderRadius: 20,*/}
{/*                    overflow: "hidden",*/}
{/*                    boxShadow: "0 8px 32px rgba(180,156,120,0.2)"*/}
{/*                }}>*/}
{/*                    */}{/* Award Header */}
{/*                    <div style={{*/}
{/*                        background: "linear-gradient(135deg,#b49c78,#9c8664)",*/}
{/*                        padding: "1.25rem 2rem",*/}
{/*                        display: "flex", alignItems: "center", gap: 12*/}
{/*                    }}>*/}
{/*                        <span style={{ fontSize: 28 }}>🏛️</span>*/}
{/*                        <div>*/}
{/*                            <div style={{ color: "#fff", fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 16, letterSpacing: 1 }}>*/}
{/*                                Government of Maharashtra*/}
{/*                            </div>*/}
{/*                            <div style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2 }}>*/}
{/*                                PRESTIGIOUS STATE RECOGNITION*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                        <div style={{ marginLeft: "auto", fontSize: 28 }}>🏆</div>*/}
{/*                    </div>*/}

{/*                    */}{/* Award Content */}
{/*                    <div style={{*/}
{/*                        display: "flex", flexWrap: "wrap",*/}
{/*                        alignItems: "center", gap: "2rem",*/}
{/*                        padding: "2rem"*/}
{/*                    }}>*/}
{/*                        */}{/* Award Photo */}
{/*                        <div style={{*/}
{/*                            flex: "0 0 auto",*/}
{/*                            width: 280,*/}
{/*                            maxWidth: "100%",*/}
{/*                            borderRadius: 14,*/}
{/*                            overflow: "hidden",*/}
{/*                            border: "3px solid #b49c78",*/}
{/*                            boxShadow: "0 8px 24px rgba(180,156,120,0.3)"*/}
{/*                        }}>*/}
{/*                            <img*/}
{/*                                src={mukhyaMantriaward}*/}
{/*                                alt="Mukhya Mantri Mazhi Shala Sundar Shala Award"*/}
{/*                                style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}*/}
{/*                            />*/}
{/*                        </div>*/}

{/*                        */}{/* Award Text */}
{/*                        <div style={{ flex: 1, minWidth: 240 }}>*/}
{/*                            <div style={{*/}
{/*                                display: "inline-block",*/}
{/*                                background: "rgba(180,156,120,0.15)",*/}
{/*                                border: "1px solid #b49c78",*/}
{/*                                borderRadius: 20, padding: "4px 16px",*/}
{/*                                color: "#9c8664", fontFamily: "Georgia,serif",*/}
{/*                                fontSize: 11, letterSpacing: 2, marginBottom: 16*/}
{/*                            }}>*/}
{/*                                🌟 GOVERNMENT AWARD*/}
{/*                            </div>*/}

{/*                            <h3 style={{*/}
{/*                                fontFamily: "Georgia,serif", color: "#212529",*/}
{/*                                fontSize: "clamp(1.2rem,3vw,1.7rem)",*/}
{/*                                fontWeight: 800, marginBottom: 12, lineHeight: 1.4*/}
{/*                            }}>*/}
{/*                                "Mukhya Mantri Mazhi Shala<br />*/}
{/*                                <span style={{ color: "#b49c78" }}>Sundar Shala Puraskar"</span>*/}
{/*                            </h3>*/}

{/*                            <div style={{*/}
{/*                                width: 50, height: 3,*/}
{/*                                background: "linear-gradient(135deg,#b49c78,#9c8664)",*/}
{/*                                borderRadius: 2, marginBottom: 16*/}
{/*                            }} />*/}

{/*                            <p style={{*/}
{/*                                color: "#495057", fontFamily: "Georgia,serif",*/}
{/*                                fontSize: 14, lineHeight: 1.9, marginBottom: 16*/}
{/*                            }}>*/}
{/*                                Rashtramata Jijau English School & Junior College has been honoured with the prestigious*/}
{/*                                <strong style={{ color: "#b49c78" }}> Mukhya Mantri Mazhi Shala Sundar Shala Puraskar</strong> —*/}
{/*                                an esteemed initiative by the <strong>Government of Maharashtra</strong> recognizing schools*/}
{/*                                for excellence in infrastructure, cleanliness, and overall school development.*/}
{/*                            </p>*/}

{/*                            <div style={{*/}
{/*                                display: "flex", flexWrap: "wrap", gap: 10*/}
{/*                            }}>*/}
{/*                                {["🏫 Best School Infrastructure", "✨ Excellence in Cleanliness", "🌿 Overall Development"].map((tag, i) => (*/}
{/*                                    <div key={i} style={{*/}
{/*                                        background: "rgba(180,156,120,0.12)",*/}
{/*                                        border: "1px solid #e0d5c5",*/}
{/*                                        borderRadius: 20, padding: "5px 14px",*/}
{/*                                        color: "#9c8664", fontFamily: "Georgia,serif", fontSize: 12*/}
{/*                                    }}>{tag}</div>*/}
{/*                                ))}*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </div>*/}

                {/* ── FACULTY SECTION ── */}
                <Faculty />

                {/* Key Milestones */}
                <div style={{ borderLeft: "2px solid #b49c78", paddingLeft: "2rem", marginTop: "3rem" }}>
                    <h2 style={{ color: "#212529", fontFamily: "Georgia,serif", marginBottom: "2rem" }}>Key Milestones</h2>
                    {[
                        { year: "2003", event: "School established in Chikhli, Buldhana" },
                        { year: "2010+", event: "Junior College section added (11th & 12th)" },
                        { year: "2018", event: "Recognized for consistent Maharashtra board results" },
                        { year: "2026", event: "Admissions open for Academic Year 2026–27" },
                    ].map((m, i) => (
                        <div key={i} style={{ marginBottom: "1.5rem" }}>
                            <span style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontWeight: 700 }}>{m.year}</span>
                            <span style={{ color: "#6C757D", fontFamily: "Georgia,serif", marginLeft: 16 }}>{m.event}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
function AppointmentPage() {
    const [form, setForm] = useState({ parentName: "", childName: "", phone: "", email: "", childAge: "", classApplyingFor: "", preferredDate: "", preferredTime: "", additionalNotes: "" });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
    const inp = { background: "#fff", border: "1px solid #e0d5c5", borderRadius: 8, color: "#212529", fontFamily: "Georgia,serif", padding: "12px 16px", fontSize: 14, width: "100%", boxSizing: "border-box" };

    const submit = async e => {
        e.preventDefault(); setLoading(true);
        try {
            const data = await post(`${API}/appointment`, { ...form, childAge: form.childAge ? parseInt(form.childAge) : null });
            setStatus({ ok: true, msg: data.message });
            setForm({ parentName: "", childName: "", phone: "", email: "", childAge: "", classApplyingFor: "", preferredDate: "", preferredTime: "", additionalNotes: "" });
        } catch { setStatus({ ok: false, msg: "Something went wrong. Please call us at +91 93739 18838." }); }
        setLoading(false);
    };

    return (
        <section style={{ background: "#F8F9FA", padding: "4rem 2rem", minHeight: "100vh" }}>
            <div style={{ maxWidth: 680, margin: "0 auto", paddingTop: "4rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>ADMISSIONS 2026–27</div>
                    <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>Book an Appointment</h1>
                    <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", marginTop: 12, lineHeight: 1.8 }}>Schedule a free campus visit and admission consultation.</p>
                </div>
                {status && (
                    <div style={{ background: status.ok ? "rgba(180,156,120,0.15)" : "rgba(183,28,28,0.1)", border: `1px solid ${status.ok ? "#b49c78" : "#c62828"}`, borderRadius: 8, padding: "1rem 1.5rem", color: status.ok ? "#b49c78" : "#c62828", fontFamily: "Georgia,serif", marginBottom: "2rem" }}>
                        {status.ok ? "✅" : "⚠️"} {status.msg}
                    </div>
                )}
                <form onSubmit={submit} style={{ background: "#fff", border: "1px solid #e0d5c5", borderRadius: 16, padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Parent Name *</label><input name="parentName" value={form.parentName} onChange={handle} required style={inp} placeholder="Full name" /></div>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Child Name *</label><input name="childName" value={form.childName} onChange={handle} required style={inp} placeholder="Child's full name" /></div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Phone *</label><input name="phone" value={form.phone} onChange={handle} required style={inp} placeholder="+91 XXXXX XXXXX" /></div>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Email</label><input name="email" value={form.email} onChange={handle} type="email" style={inp} placeholder="your@email.com" /></div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Child Age</label><input name="childAge" value={form.childAge} onChange={handle} type="number" min={3} max={20} style={inp} placeholder="Age" /></div>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Class</label>
                            <select name="classApplyingFor" value={form.classApplyingFor} onChange={handle} style={inp}>
                                <option value="">Select</option>
                                {["Nursery", "Jr. KG", "Sr. KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map(c => <option key={c}>{c}</option>)}
                            </select>
                        </div>
                        <div><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Time</label>
                            <select name="preferredTime" value={form.preferredTime} onChange={handle} style={inp}>
                                <option value="">Any time</option>
                                <option>9:00 AM – 11:00 AM</option>
                                <option>11:00 AM – 1:00 PM</option>
                                <option>2:00 PM – 4:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: "1rem" }}><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Preferred Date *</label><input name="preferredDate" value={form.preferredDate} onChange={handle} required type="date" style={inp} min={new Date().toISOString().split("T")[0]} /></div>
                    <div style={{ marginBottom: "2rem" }}><label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Additional Notes</label><textarea name="additionalNotes" value={form.additionalNotes} onChange={handle} rows={3} style={{ ...inp, resize: "vertical" }} placeholder="Any specific questions..." /></div>
                    <button type="submit" disabled={loading} style={{ width: "100%", background: "linear-gradient(135deg,#b49c78,#9c8664)", color: "#fff", border: "none", borderRadius: 8, padding: "14px", fontSize: 16, cursor: loading ? "not-allowed" : "pointer", fontFamily: "Georgia,serif", letterSpacing: 1 }}>
                        {loading ? "Booking..." : "📋 Book Appointment"}
                    </button>
                </form>
                <div style={{ marginTop: "1.5rem", textAlign: "center", color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13 }}>
                    Or call us at <a href="tel:+919373918838" style={{ color: "#b49c78" }}>+91 93739 18838</a>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    const [form, setForm] = useState({ fullName: "", email: "", phone: "", subject: "", message: "" });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
    const inp = { background: "#fff", border: "1px solid #e0d5c5", borderRadius: 8, color: "#212529", fontFamily: "Georgia,serif", padding: "12px 16px", fontSize: 14, width: "100%", boxSizing: "border-box" };

    const submit = async e => {
        e.preventDefault(); setLoading(true);
        try {
            const data = await post(`${API}/contact`, form);
            setStatus({ ok: true, msg: data.message });
            setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
        } catch { setStatus({ ok: false, msg: "Failed. Please email rashtrmatajijau16@gmail.com" }); }
        setLoading(false);
    };

    return (
        <section style={{ background: "#F8F9FA", minHeight: "100vh", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", paddingTop: "4rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>GET IN TOUCH</div>
                    <h1 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>Contact Us</h1>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "3rem" }}>
                    <div>
                        {[
                            { icon: "📍", title: "Address", val: "Chikhli, Buldhana, Maharashtra, India" },
                            { icon: "📞", title: "Phone", val: "+91 93739 18838" },
                            { icon: "📧", title: "Email", val: "rashtrmatajijau16@gmail.com" },
                            { icon: "🕐", title: "School Hours", val: "Mon–Sat: 7:30 AM – 2:00 PM" },
                        ].map((c, i) => (
                            <div key={i} style={{ display: "flex", gap: 14, marginBottom: "1.2rem", background: "#fff", border: "1px solid #e0d5c5", borderRadius: 10, padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                                <div style={{ fontSize: 22 }}>{c.icon}</div>
                                <div>
                                    <div style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 11, letterSpacing: 2, marginBottom: 4 }}>{c.title.toUpperCase()}</div>
                                    <div style={{ color: "#495057", fontFamily: "Georgia,serif", fontSize: 14 }}>{c.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {status && <div style={{ background: status.ok ? "rgba(180,156,120,0.15)" : "rgba(183,28,28,0.1)", border: `1px solid ${status.ok ? "#b49c78" : "#c62828"}`, borderRadius: 8, padding: "1rem", color: status.ok ? "#b49c78" : "#c62828", fontFamily: "Georgia,serif", marginBottom: "1.5rem" }}>{status.msg}</div>}
                        <form onSubmit={submit} style={{ background: "#fff", border: "1px solid #e0d5c5", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                            {[
                                { name: "fullName", label: "Full Name *", req: true, ph: "Your name" },
                                { name: "email", label: "Email *", req: true, ph: "your@email.com", type: "email" },
                                { name: "phone", label: "Phone", ph: "+91 XXXXX XXXXX" },
                                { name: "subject", label: "Subject", ph: "Admission inquiry..." },
                            ].map(f => (
                                <div key={f.name} style={{ marginBottom: "1rem" }}>
                                    <label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>{f.label}</label>
                                    <input name={f.name} value={form[f.name]} onChange={handle} required={f.req} type={f.type || "text"} style={inp} placeholder={f.ph} />
                                </div>
                            ))}
                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 12, display: "block", marginBottom: 6 }}>Message *</label>
                                <textarea name="message" value={form.message} onChange={handle} required rows={4} style={{ ...inp, resize: "vertical" }} placeholder="Your message..." />
                            </div>
                            <button type="submit" disabled={loading} style={{ width: "100%", background: "linear-gradient(135deg,#b49c78,#9c8664)", color: "#fff", border: "none", borderRadius: 8, padding: "14px", fontSize: 15, cursor: "pointer", fontFamily: "Georgia,serif", letterSpacing: 1 }}>
                                {loading ? "Sending..." : "✉️ Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer({ setActive }) {
    return (
        <footer style={{ background: "#FFFFFF", borderTop: "1px solid #e0d5c5", padding: "3rem 2rem 2rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2rem", marginBottom: "2rem" }}>
                    <div>
                        <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 10, fontSize: 15 }}>Rashtramata Jijau School</h3>
                        <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, lineHeight: 1.8 }}>Established in 2003 in Chikhli, Buldhana, Maharashtra. Committed to academic excellence since our founding.</p>
                    </div>
                    <div>
                        <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 10, fontSize: 15 }}>Quick Links</h3>
                        {["Home", "About", "Appointment", "Contact"].map(l => (
                            <button key={l} onClick={() => setActive(l)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, padding: "3px 0", textAlign: "left" }}>{l}</button>
                        ))}
                    </div>
                    <div>
                        <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 10, fontSize: 15 }}>
                            Contact
                        </h3>

                        <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 13, lineHeight: 2 }}>

                            📞 <a href="tel:+919373918838" style={{ color: "#6C757D" }}>
                                +91 93739 18838
                            </a><br />

                            📧 <a href="mailto:rashtrmatajijau16@gmail.com" style={{ color: "#6C757D" }}>
                                rashtrmatajijau16@gmail.com
                            </a><br />

                            <FaInstagram style={{ marginRight: 6 }} />
                            <a
                                href="https://www.instagram.com/rashtrmatajijau_engschool2003?igsh=N2J5eWpudWkzcDZ4"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#6C757D", textDecoration: "none" }}
                            >
                                @rashtrmatajijau_engschool2003
                            </a><br />

                            📍 Chikhli, Buldhana, MH
                        </p>
                    </div>
                    <div>
                        <h3 style={{ color: "#b49c78", fontFamily: "Georgia,serif", marginBottom: 10, fontSize: 15 }}>Admissions</h3>
                        <div style={{ background: "rgba(180,156,120,0.1)", border: "1px solid #b49c78", borderRadius: 8, padding: "1rem" }}>
                            <div style={{ color: "#b49c78", fontFamily: "Georgia,serif", fontSize: 14, fontWeight: 700 }}>🎓 2026–27 Open</div>
                            <div style={{ color: "#6C757D", fontFamily: "Georgia,serif", fontSize: 12, marginTop: 4 }}>Nursery to 12th Standard</div>
                        </div>
                    </div>
                </div>
                <div style={{
                    borderTop: "1px solid #e0d5c5",
                    paddingTop: "1.5rem",
                    textAlign: "center",
                    color: "#6C757D",
                    fontFamily: "Georgia,serif",
                    fontSize: 12
                }}>
                    © 2026 Rashtramata Jijau English School & Junior College, Chikhli. All rights reserved.

                    <br />

                    💻 Designed & Developed by
                    <span style={{ color: "#b49c78", fontWeight: "bold" }}>
                        Tanmay Bhandare
                    </span> |
                    📞 <a href="tel:+919552205068" style={{ color: "#6C757D", textDecoration: "none" }}>
                        +91 9552205068
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default function App() {
    const [active, setActive] = useState("Home");
    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [active]);

    return (
        <div style={{ background: "#F8F9FA", minHeight: "100vh" }}>
            <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        input, select, textarea { outline: none; }
        input::placeholder, textarea::placeholder { color: #adb5bd; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F8F9FA; }
        ::-webkit-scrollbar-thumb { background: #b49c78; border-radius: 3px; }
      `}</style>
            <Navbar active={active} setActive={setActive} />
            {active === "Home" && (
                <>
                    <Hero setActive={setActive} />

                    <Features />
                    <SchoolSections setActive={setActive} />
                    <AchievementsHomeSection setActive={setActive} />
                    <Testimonials />
                    <section style={{ background: "#fff", textAlign: "center", padding: "5rem 2rem", borderTop: "1px solid #e0d5c5" }}>
                        <div style={{ color: "#b49c78", letterSpacing: 4, fontSize: 11, fontFamily: "Georgia,serif", marginBottom: 12 }}>ADMISSIONS OPEN</div>
                        <h2 style={{ fontFamily: "Georgia,serif", color: "#212529", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", marginBottom: "1.5rem" }}>Begin Your Child's Bright Future Today</h2>
                        <p style={{ color: "#6C757D", fontFamily: "Georgia,serif", marginBottom: "2.5rem", maxWidth: 480, margin: "0 auto 2.5rem" }}>Academic Year 2026–27. Quality education from Nursery to 12th Standard.</p>
                        <button onClick={() => setActive("Appointment")} style={{ background: "linear-gradient(135deg,#b49c78,#9c8664)", color: "#fff", border: "none", borderRadius: 6, padding: "16px 48px", fontSize: 16, cursor: "pointer", fontFamily: "Georgia,serif", letterSpacing: 1, boxShadow: "0 6px 30px rgba(180,156,120,0.4)" }}>
                            Schedule a Free Visit
                        </button>
                    </section>
                </>
            )}
            {active === "About" && <About />}
            {active === "Facilities" && <Facilities setActive={setActive} />}
            {active === "Appointment" && <AppointmentPage />}
            {active === "Contact" && <Contact />}
            {active === "Achievements" && <AchievementsPage />}
            {active === "Admin" && <AdminDashboard />}
            {active === "Status" && <AppointmentStatus />}
            <Footer setActive={setActive} />
        </div>
    );
}
