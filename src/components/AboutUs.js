import React from 'react';
import chapterlogo from '../assets/images/chapterlogo.jpeg';
import { IoIosMail } from 'react-icons/io';
import jkuatlogo from '../assets/images/jkuatlogo.png'

function AboutUs() {
  return (
    <div className="about">
      <div className="details-container">
        <div className="details">
          <h2>About Us</h2>
          <p>
            GeeksforGeeks Student Chapters are university based community
            chapters for student interested in Computer Science and other core
            technical competences.
            <br />
            <br />
            <span style={{ color: 'rgb(107, 114, 128)' }}>
              Team Size: 7 members
            </span>
          </p>
        </div>
        <div className="logo">
          <img src={chapterlogo} alt="GfG-Bits" />
        </div>
      </div>
      <div className="extra-detail">
        <span>Visit us at:</span>
        <br />
        <span>Jomo Kenyatta University of Agriculture and Technology, Kenya</span>
        <br />
        <span>62 000 – 00200 NAIROBI, KENYA,</span>
        <br />
        <span>NAIROBI, KENYA</span>
        <br />
        <span
          style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}
        >
          <IoIosMail size={32} />:
          <a
            href="mailto: geeksforgeeksjkuatkenya01@gmail.com"
            style={{ marginLeft: '1rem' }}
          >
           geeksforgeeksjkuatkenya01@gmail.com
          </a>
        </span>
      </div>
      <div className="associations">
        <h1> In association with </h1>
        <div className="logos">
          <img src={jkuatlogo} alt="HnCC" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
