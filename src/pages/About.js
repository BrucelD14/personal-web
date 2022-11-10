import { useEffect } from "react";

export default function About() {
  useEffect(function () {
    document.title = "ABOUT";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">ABOUT</h1>
      <img
        src="https://thumbs2.imgbox.com/9e/10/IbsY3MDA_t.jpg"
        className="about-image"
        alt="profile-image"
      />
      <p className="section-description">
        Hi there, all. Let me introduce myself. My name is Brucel Duta Samudera.
        I was born in Serdang Bedagai on June 14th 2002, but now I live in
        Lhokseumawe, Aceh.
      </p>
      <p className="section-description">
        I am currently a 5th semester student, at Malikussaleh University, and
        am currently attending the program Kampus merdeka,where I took the
        Independent Study program with the Frontend Developer learning path in
        PT. IMPACTBYTE TEKNOLOGI EDUKASI.
      </p>
      <p className="section-description">
        I've completed several Web Development bootcamps,and I loved programming
        events too, and now I am also interested in studying fullstack
        development. I also actively follow the expertise in the organization,
        currently I am one of the administrators of the organization, I am a
        administrator in the field of information and communication, my task is
        to make designs about information and publish it on social media
        organization IKMA-Sergai Lhokseumawe Aceh Utara
      </p>
      <p className="section-description">
        Some of the skills I have are UI UX Design, Javascript, SQL. My special
        emphasis and passion is on Web Dev, but I found a new thing that turned
        out to be fun too which is Product Management.
      </p>
    </section>
  );
}
