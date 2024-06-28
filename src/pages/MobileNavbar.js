import React, { useState } from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNavbar.css"
import { ImCross } from "react-icons/im";
import { IoCall, IoMail } from "react-icons/io5";

const MobileNavbar = ({
    select,
    setSelect
  }) => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const NavbarboxRef = useRef(null);
  
    const handleToggle = () => {
      const box = NavbarboxRef.current;
      // Apply initial styles
      box.style.transition = "transform 0.3s ease-in-out";
      box.style.transform = sidebarToggle && "translateX(70%)";
      box.style.right = !sidebarToggle && "-21%";
      box.style.display = sidebarToggle ? "block" : "none";
  
      // Delay style changes to ensure initial styles are applied before transition
      setTimeout(() => {
        box.style.transition = "transform 0.3s ease-out";
        box.style.transform = sidebarToggle
          ? "translateX(-0%)"
          : "translateX(70%)";
        box.style.right = sidebarToggle ? "0%" : "-21%";
      }, 200);
      setSidebarToggle(!sidebarToggle);
    };
  
    return (
      <>
        <div className="Navbar_coontainer">
          <a to="/">
            <div className="Navbar_logo">
              <img src='' alt="logo" />
            </div>
          </a>
        
            <>
              <div style={{ display: 'flex' }}>
                <div
                  onClick={() => handleToggle()}
                  style={{ color: "", marginLeft: '20px' }}
                  className="Navbar_hambergure_icon"
                >
                  <GiHamburgerMenu />
                </div>
              </div>
            </>
        </div>
        {!sidebarToggle && (
          <div
            onClick={() => handleToggle()}
            className="Eventlist_speakerore_sidebar_empty_div"
          ></div>
        )}
        {
          // !sidebarToggle &&
          <div
            ref={NavbarboxRef}
            id="Navbar_sidebar_id"
            className="Navbar_sidebar"
          >
            <div>
              <div className="side-top">
                <div className="side-logo">
                    <img src='' alt="logo" />
                </div>
                <div className="cross" onClick={() => handleToggle()}>
                    <ImCross id="cross" />
                </div>
              </div>
              <div className="Navbar_inputfield">
              <div>
                  <a to="/" onClick={() => {
                    setSelect('event')
                  }}>
                    <div className="nav-select" id={select === 'event' ? 'side-select' : ''} onClick={() => handleToggle()}>
                      Home
                    </div>
                  </a>
                  <a to="/about" onClick={() => {
                    setSelect('create')
                  }}>
                    <div className="nav-select" id={select === 'create' ? 'side-select' : ''} onClick={() => handleToggle()}>
                      About Us
                    </div>
                  </a>
                  <a to="/program" onClick={() => {
                    setSelect('subs')
                  }}>
                    <div className="nav-select" id={select === 'subs' ? 'side-select' : ''} onClick={() => handleToggle()}>
                      Programs
                    </div>
                  </a>
                  <a to="/admission" onClick={() => {
                    setSelect('pro')
                  }}>
                    <div className="nav-select" id={select === 'pro' ? 'side-select' : ''} onClick={() => handleToggle()}>
                    Admission
                    </div>
                  </a>
                  <a to="/contact" onClick={() => {
                    setSelect('contact')
                  }}>
                    <div className="nav-select" id={select === 'contact' ? 'side-select' : ''} onClick={() => handleToggle()}>
                      Contact                    </div>
                  </a>
                </div>
  
              </div>
              <div className='top-contacts'>
          <div className='contacts' id='contacts'>
            <div className='c-icon'>
              <IoCall id='c-icon' />
            </div>
            <div className='c-desc'>
              <p>Call Us</p>
              <h2>+91 7290905000</h2>
            </div>
          </div>
          <div className='contacts'>
            <div className='c-icon'>
              <IoMail id='c-icon' />
            </div>
            <div className='c-desc'>
              <p>Email</p>
              <h2>Info@ajile.com</h2>
            </div>
          </div>
        </div>
  
            </div>
          </div>
        }
      </>
    );
  };

export default MobileNavbar