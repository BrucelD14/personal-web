import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "HOME";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">WELCOME TO MY WEBSITE</h1>
      <p className="section-description">
        Hello there, it's my personal website. You can get personal information about me here, nice to meet you. Have a nice day!
      </p>
      <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="home-image" className="home-image" />
    </section>
  );
}
