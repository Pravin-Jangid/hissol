import Hero from "@/app/Components/CommoneHero";

export default function EducationPage() {
  return (
    <div style={{ background: "var(--clr-bg)", color: "var(--clr-text)" }}>
      {/* HERO */}
      <Hero
        title="Education"
        description="Learn more about our company and our mission to provide innovative IT solutions."
      />
      {/* EDUCATION INTRO */}
      <section className="container">
        <div className="card">
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "var(--brand-dark)",
              marginBottom: "1rem",
            }}
          >
            Education at HISSOL
          </h2>

          <p>
            At HISSOL, we believe in empowering our team and clients through
            continuous learning and development. Our education programs are
            designed to keep everyone updated with the latest industry trends,
            technologies, and best practices.
          </p>

          <p style={{ marginTop: "1rem" }}>
            We offer a variety of training sessions, workshops, and seminars
            that cover a wide range of topics including IT infrastructure,
            cloud computing, cybersecurity, and more. Our goal is to foster a
            culture of knowledge sharing and professional growth.
          </p>
        </div>
      </section>
    </div>
  );
}