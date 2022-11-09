import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "HOME";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">SELAMAT DATANG DI WEBSITE GUEH</h1>
      <p className="section-description">
        Halo semua, ini website baru aku. Kamu bisa mendapatkan informasi
        seputar pribadiku disini, salam kenal yaa. Have a nice day!
      </p>
    </section>
  );
}
