import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "HOME";
  }, []);

  return (
    <section className="section home">
      <h1 className="section-title">WELCOME TO MY WEBSITE</h1>
      <p className="section-description">
        Hello there, it's my personal website. You can get personal information about me here, nice to meet you. Have a nice day!
      </p>
    </section>
  );
}
