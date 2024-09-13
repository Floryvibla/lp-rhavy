"use client"

import React from 'react';

interface AboutBoxProps {
  images: string[];
  videoSrc?: string;
  title: string;
  description: string;
  list1?: string[];
  list2?: string[];
}

const AboutBox: React.FC<AboutBoxProps> = ({
  images,
  videoSrc,
  title,
  description,
  list1,
  list2,
}) => {
  const handleLightboxOpen = () => {
    const lightbox = document.getElementById('light');
    const fade = document.getElementById('fade1');
    if (lightbox) lightbox.style.display = 'block';
    if (fade) fade.style.display = 'block';
  };

  const handleLightboxClose = () => {
    const lightbox = document.getElementById('light');
    const fade = document.getElementById('fade1');
    if (lightbox) lightbox.style.display = 'none';
    if (fade) fade.style.display = 'none';
  };

  return (
    <section className="w-100 float-left about-con design-img padding-top padding-bottom position-relative">
      <div className="wrapper3">
        <div className="about-box" data-aos="fade-up" data-aos-duration="700">
          <div className="about-box-img">
            {/* <div className="vedio-img position-relative"> */}
              <img
                className="thumb poster-con index1-poster"
                src={images[0]}
                alt="vedio-img"
              />
            {/* </div> */}
          </div>
          <div className="about-box-title" data-aos="fade-up" data-aos-duration="700">
            <span className="d-block sub-txt">Sobre mim</span>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <div className="generic-list">
              <ul className="list-unstyled mb-0">
                {list1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="list-unstyled mb-0">
                {list2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div> */}
            <div className="generic-btn">
              <a href="doctors.html">Agende sua consulta</a>
              <a href="doctors.html">
                <figure className="mb-0">
                  <img src="assets/images/long-arrow.png" alt="long-arrow" />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="light" style={{ display: 'none' }}>
        <a className="boxclose" id="boxclose" onClick={handleLightboxClose}></a>
        <iframe src={videoSrc} allowFullScreen title="video" />
      </div> */}

      {/* <div id="fade1" style={{ display: 'none' }} onClick={handleLightboxClose}></div> */}
    </section>
  );
};

export default AboutBox;
