import Hero from "../Components/CommoneHero";

export default function AboutPage() {
  return (
    <div style={{ background: "var(--clr-bg)", color: "var(--clr-text)" }}>
      {/* HERO */}
      <Hero
        title="About Us"
        description="Learn more about our company and our mission to provide innovative IT solutions."
      />

      {/* ABOUT INTRO */}
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
            HISSOL
          </h2>

          <p>
            <strong>
              Hosting Infrastructure Service And Solutions (HISSOL)
            </strong>{" "}
            is a globally certified professional IT services company helping
            businesses run seamlessly on the internet.
          </p>

          <p style={{ marginTop: "1rem" }}>
            We deliver high-quality services across India in server
            installation, maintenance & monitoring, infrastructure stack
            development, virtualization, SAP HANA – TDI solutions and various IT
            enabled services such as Hosting, Web Development, App Development,
            ERP Solutions and more.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--brand-dark)",
            marginBottom: "2rem",
          }}
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Infrastructure Stack Developments",
            "AMCs (Annual Maintenance Contracts)",
            "Diverse Server Configurations",
            "Virtualization Solutions & Services",
            "High Availability & Cluster Services",
          ].map((item) => (
            <div key={item} className="card">
              <h4 style={{ color: "var(--brand-main)" }}>{item}</h4>
              <p className="text-muted">
                Enterprise-grade, scalable and secure solutions designed to
                minimize downtime and maximize performance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY HISSOL */}
      <section className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--brand-dark)",
            marginBottom: "2rem",
          }}
        >
          Why HISSOL?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4>Top-Notch Services</h4>
            <p className="text-muted">
              24/7 real-time support across India ensuring reliability and
              uninterrupted operations.
            </p>
          </div>

          <div className="card">
            <h4>Efficient Execution</h4>
            <p className="text-muted">
              Experienced professionals delivering every task efficiently
              without disrupting business workflows.
            </p>
          </div>

          <div className="card">
            <h4>Creative Thought</h4>
            <p className="text-muted">
              Innovation and creativity drive our approach to modern IT
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container">
        <div className="card text-center">
          <h2 style={{ color: "var(--brand-dark)" }}>What Defines Us</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span className="btn btn-soft">Reliable</span>
            <span className="btn btn-soft">Fast & Secure</span>
            <span className="btn btn-soft">Creative Thought</span>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="container">
        <div className="card">
          <h2 style={{ color: "var(--brand-dark)" }}>Welcome to HISSOL</h2>

          <p className="text-muted">
            Since 2020, HISSOL has delivered solutions to almost every industry
            with minimal downtime. Our mission is to reduce maintenance costs
            while helping businesses confidently adapt to new challenges.
          </p>

          <p className="text-muted" style={{ marginTop: "1rem" }}>
            HISSOL is ideal for anyone looking for reliable, scalable and
            future-ready IT services.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <button className="btn btn-primary">Contact Us →</button>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="container text-center">
        <p className="text-muted">
          <strong>HISSOL Team</strong>, since 2020
        </p>
      </section>
    </div>
  );
}
