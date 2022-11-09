import { useEffect } from "react";

export default function Portfolio() {
  useEffect(function () {
    document.title = "PORTFOLIO";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">PORTFOLIO PAGE</h1>
    </section>
  );
}
