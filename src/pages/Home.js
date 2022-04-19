import React, { useState } from "react";
import "../App.css";
import Mosque from "../images/mosque.png";
import Polygon from "../images/triangle.png";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import Rounded from '../images/rounded.png'
import About from "./About";
// import { Link } from 'react-router-dom';

const Home = () => {
  const [sendMessage] = useState(
    "mailto:bayustrio7@gmail.com?subject=SendMail&body=Hello Muhammad Satrio"
  );
  return (
    <>
      <div className="home">
        <div className="contact-section">
          <div className="horizontal"></div>
          {/* === GITHUB === */}
          <a
            href="https://github.com/bayustrio"
            target="_blank"
            className="icon-section"
          >
            <AiFillGithub />
          </a>

          {/* === EMAIL === */}
          <a
            onClick={() => {
              window.open(sendMessage);
            }}
            target="_blank"
            className="icon-section"
          >
            <ImMail4 />
          </a>

          {/* === FACEBOOK */}
          <a
            className="icon-section"
            href="https://www.facebook.com/bayu.satrio.718689"
            target="_blank"
          >
            <BsFacebook />
          </a>
          <div className="horizontal"></div>
        </div>
        <div className="text-section">
                <img className="polygon" src={Polygon}/>
          <h1>
            Allah selalu ada di hatimu, terlibatlah dalam hal-hal yang baik
          </h1>
          <p>
            Waki’ rahimahullah berkata, “Apabila kamu ingin menghafalkan hadits,
            maka amalkanlah hadits itu.”
          </p>
          <a href="/hadits" className="btn-explore">Explore</a>
        </div>

             <div className="bg-hero"><img src={Rounded} /></div>
        <div className="hero-section">
          <img src={Mosque} />
        </div>
      </div>
            
      <About/>
      {/* <Hadits/> */}
    </>
  );
};

export default Home;
