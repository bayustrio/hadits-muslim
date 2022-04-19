import React from "react";
import Hero from "../images/about-hero.png";
import "../App.css";
const About = () => {
  return (
    <>
      <section id='about' className="about">
        <div className="hero-about">
          <img src={Hero} />
        </div>

        <div className="text-about">
          <h1>About Hadits.co</h1>
          <p>
            Hadits disebut juga sunnah, adalah perkataan Nabi Muhammad ﷺ,
            perbuatan, ketetapan dan persetujuan dari Nabi Muhammad ﷺ yang
            dijadikan landasan syariat Islam. Hadis dijadikan sumber hukum Islam
            selain al-Qur'an, dalam hal ini kedudukan hadis merupakan sumber
            hukum kedua setelah al-Qur'an.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
