import { useEffect } from "react";

export default function Portfolio() {
  useEffect(function () {
    document.title = "PORTFOLIO";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">PORTFOLIO</h1>
      <p className="section-description">
        these are some of the projects and certificates i have:
      </p>
      <a
        href="https://newversion-brucel4movie.netlify.app/"
        target="_blank"
        className="portfolio"
        rel="noreferrer"
      >
        <div className="portfolio-card">
          <h3 className="portfolio-title">brucel4movie</h3>
          <p className="portfolio-description">Movie list app</p>
          <br />
          <span className="portfolio-stack">Javascript</span>
          <span className="portfolio-stack">Bootstrap 5</span>
        </div>
      </a>
      <a
        href="https://bmi-calculator-tpa2.netlify.app/"
        target="_blank"
        className="portfolio"
        rel="noreferrer"
      >
        <div className="portfolio-card">
          <h3 className="portfolio-title">BMI Calculator</h3>
          <p className="portfolio-description">
            Calculator for your ideal weight & height
          </p>
          <br />
          <span className="portfolio-stack">Javascript</span>
          <span className="portfolio-stack">Bootstrap 5</span>
        </div>
      </a>
      <a
        href="dicoding.com/certificates/ERZR44O3WZYV"
        target="_blank"
        className="portfolio"
        rel="noreferrer"
      >
        <div className="portfolio-card">
          <h3 className="portfolio-title">Cloud Practitioner Essentials</h3>
          <p className="portfolio-description">Learn basic AWS Cloud</p>
          <br />
          <span className="portfolio-stack">Dicoding Academy</span>
        </div>
      </a>
      <a
        href="dicoding.com/certificates/ERZR44O3WZYV"
        target="_blank"
        className="portfolio"
        rel="noreferrer"
      >
        <div className="portfolio-card">
          <h3 className="portfolio-title">UI/UX Design Mastery</h3>
          <p className="portfolio-description">Learn UI/UX design at Skilvul</p>
          <br />
          <span className="portfolio-stack">Skilvul</span>
        </div>
      </a>
    </section>
  );
}
