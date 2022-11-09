import { useEffect } from "react";

export default function Portfolio() {
  useEffect(function () {
    document.title = "PORTFOLIO";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">PORTFOLIO</h1>
      <p className="section-description">
        Ini adalah project dan sertifikat yang kumiliki:
      </p>
      <a href="https://newversion-brucel4movie.netlify.app/" target="_blank" className="portfolio" rel="noreferrer">
        <div className="portfolio-card">
          <h3 className="portfolio-title">brucel4movie</h3>
          <p className="portfolio-description">Movie list app</p>
          <br />
          <span className="portfolio-stack">Javascript</span>
          <span className="portfolio-stack">Bootstrap 5</span>
        </div>
      </a>
      <a href="https://newversion-brucel4movie.netlify.app/" target="_blank" className="portfolio" rel="noreferrer">
        <div className="portfolio-card">
          <h3 className="portfolio-title">brucel4movie</h3>
          <p className="portfolio-description">Movie list app</p>
          <br />
          <span className="portfolio-stack">Javascript</span>
          <span className="portfolio-stack">Bootstrap 5</span>
        </div>
      </a>
      <a href="https://newversion-brucel4movie.netlify.app/" target="_blank" className="portfolio" rel="noreferrer">
        <div className="portfolio-card">
          <h3 className="portfolio-title">brucel4movie</h3>
          <p className="portfolio-description">Movie list app</p>
          <br />
          <span className="portfolio-stack">Javascript</span>
          <span className="portfolio-stack">Bootstrap 5</span>
        </div>
      </a>
    </section>
  );
}
