import React, { useRef, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import watrwellLogo from './images/watrwell.png';
import instaIcon from './images/insta.svg';
import videoSrc from './images/WATRWELL_INTRO.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays properly on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneInput = e.target.querySelector('input[type="text"]');
    const phoneNumber = phoneInput.value.trim();

    // if (phoneNumber) {
    //   console.log('Phone number submitted:', phoneNumber);
    //   // Add your form submission logic here
    //   phoneInput.value = '';
    //   alert('Thank you! We\'ll contact you soon.');
    // } else {
    //   alert('Please enter a valid phone number.');
    // }
  };

  // const handlePrivacyClick = (e) => {
  //   e.preventDefault();
  //   alert('Privacy policy page would open here');
  // };

  // const handleLegalClick = (e) => {
  //   e.preventDefault();
  //   alert('Legal page would open here');
  // };

  return (
    <main className="homeMain">
      {/* Header Section */}
      <section className="menuPart">
        <div className="container">
          <div className="topArea">
            <div className="logo">
              <a href="/">
                <img src={logo} className="img-fluid" alt="WATRWELL Logo" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="centerContent">
        <div className="container">
          <div className="wtrLogoArea">
            <div className="watrLogo">
              <img src={watrwellLogo} className="img-fluid" alt="WATRWELL" />
            </div>
            <div className="data homeSlash">
              <span className="slash">|</span> THE New <span>QUALITY STANDARD</span> FOR{' '}
              <span>DAILY DRINKING WATER</span>, GLOBALLY.{' '}
              {/* <span className="onlyMob">|</span> */}
            </div>
            <div className="data text-center mt-4 flowing">
              <span>Flowing 2026</span>
              <span className="slash">|</span>
              <span className='stayEngage'><span className='stayD'>STAY ENGAGED</span>
                <a
                  href="https://www.instagram.com/watrwell/?igsh=ZW41d2kxbThsdWZy#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta"
                >
                  <img src={instaIcon} className="img-fluid mainInsta" alt="Instagram" />
                </a>
              </span>
            </div>
            <div className='mobileStayText'>STAY ENGAGED</div>
            <div className="formAra">
              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  type="text"
                  placeholder="ENTER MOBILE # TO BE FIRST "
                  pattern="[0-9+\-() ]+"
                  title="Please enter a valid phone number"
                  required
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="videoSec">
        <video
          ref={videoRef}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="footerLinks">
            <div className="footerData">watrwell, LLC © 2026 | ALL RIGHTS RESERVED. </div>

            <div className="footerData">
              <a href="#privacy">
                Privacy
              </a>{' '}
              +{' '}
              <a href="#legal">
                legal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;