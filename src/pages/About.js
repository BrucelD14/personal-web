import { useEffect } from "react";

export default function About() {
  useEffect(function () {
    document.title = "ABOUT";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">ABOUT</h1>
      <p className="section-description">
        Halo namaku Brucel, aku adalah seorang Web Developer yang baru mulai
        belajar React.js
      </p>
    </section>
  );
}
