import React from 'react'
import topShape from '../utils/section-top-shape.png'
import bottomShape from '../utils/section-bottom.png'
import qualityShape from '../utils/q-bg.jpg'
import contact from '../utils/footer-top.png'

import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { CgCommunity } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

import './pages.css'
const Hero = () => {
  return (
    <div>
      <div className='top-shape'>
        <div className='info'>
          <div>
            Sector 16A Faridabad
          </div>
          <div>
            Info@Littlecolumbus.Com
          </div>
        </div>
        <div className='socials'>

          <div>
            Follow Us On:
          </div>
          <div>
            {/* F */}
          </div>
          <div>
            {/* T */}
          </div>
        </div>
      </div>
      <div className='navbar'>
        <div className='logo'>
          <img alt='logo' src='' />
        </div>
        <div className='nav-items'>
          <ul className='nav-ul'>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Programs</a></li>
            <li><a>Admission</a></li>
            <li><a>Contacts</a></li>
          </ul>
          <button className='btn'>Apply Now <span id='arrow'>➜</span></button>
        </div>
      </div>
      <div className='section-1'>
        <div className='section-1-left'>
          <p>Little Columbus ✨</p>
          <h1>Welcome To
            <div id='color-txt'>Little Columbus Preschool</div>
            Where Every Child's Journey <br /> Begins!</h1>
          <h3>Discover A Nurturing And Inspiring Environment For Your Child's Early Education.</h3>
          <button className='btn'>Apply Now <span id='arrow'>➜</span></button>
        </div>
        <div className='section-1-right'>
          <img id='hero-img' src='https://www.littlecolumbus.com/AssetAdmission/img/hero/01.png' />
        </div>
      </div>
      <div className='section-2'>
        <div className='section-2-left'>
          <img id='sec-img' src='https://www.littlecolumbus.com/AssetAdmission/img/teacher1.jpg' />
        </div>
        <div className='section-2-right'>
          <p>About Us          </p>
          <h1>About Little Columbus Preschool</h1>
          <h3>At Little Columbus, We Believe In Fostering Curiosity, Creativity, And A Love For Learning In Every Child. Our Experienced Educators Provide A Safe And Engaging Environment Where Children Can Explore And Grow. We Focus On Holistic Development, Including Cognitive, Social, Emotional, And Physical Growth</h3>
          <div className='points'>
            <div className='points-child'>
              <div className='point'>  Experienced And Caring Staff</div>
              <div className='point'>Innovative Teaching Methods</div>
            </div>
            <div className='points-child'>
              <div className='point'> Safe And Stimulating Environment</div>
              <div className='point'>Inclusive And Diverse Community</div>
            </div>
          </div>
          <button className='btn'>Explore More <span id='arrow'>➜</span></button>
        </div>
      </div>
      <div className='program'>
        <div className='pro-top'>
          <img src={topShape} style={{width:"100%"}} />
        </div>
        <p className='pro-head'>Our Programs</p>
        <h1 className='head-txt'>Designed To Cater To The Unique Needs Of Every Child
          Our Programs Include
        </h1>
        <div className='mask'></div>
        <div className='pro-btn'>
          <button className='btn'>Apply Today <span id='arrow'>➜</span></button>
        </div>
        <div className='pro-bottom'>
          <img src={bottomShape} style={{width:"100%"}}/>
        </div>
      </div>

      <div className='admission'>
        <p className='pro-head'>Admission Process</p>
        <h1 className='head-txt'>LC Admission Process</h1>
        <div className='step-1'>
          <i className='icon-icon-1'></i>
        </div>
      </div>

      <div className='section-2' id='choose'>
        <div className='section-2-left'>
          <img id='sec-img' src='https://www.littlecolumbus.com/AssetAdmission/img/aboutsection.png' />
        </div>
        <div className='section-2-right'>
          <p>Why Choose Us
          </p>
          <h1>Why Choose Little Columbus?          </h1>
          <h3>Teaching And Learning Should Be A Joyful Experience. We At Little Columbus Believe That The Child Picks Up Spontaneously And Naturally When Learning Is Fun.</h3>
          <div className='points'>
            <div className='points-child'>
              <div className='point-parent'>
                <div className='point-icon1'>
                  <FaChalkboardTeacher id='icon1' />
                </div>
                <div className='point'> Qualified Teachers:
                  <p>Our Educators Are Experienced And Passionate About Early Childhood Education.</p>
                </div>
              </div>
              <div className='point-parent'>
                <div className='point-icon2'>
                  <LuBrain id='icon2' />
                </div>
                <div className='point'>Enriching Curriculum
                  <p>Our Educators Are Experienced And Passionate About Early Childhood Education.</p>
                </div>
              </div>
            </div>
            <div className='points-child'>
              <div className='point-parent'>
                <div className='point-icon3'>
                  <AiOutlineSafety id='icon3' />
                </div>
                <div className='point'> Safe Environment
                  <p>Our Educators Are Experienced And Passionate About Early Childhood Education.</p>
                </div>
              </div>
              <div className='point-parent'>
                <div className='point-icon4'>
                  <CgCommunity id='icon4' />
                </div>
                <div className='point'>Community
                  <p>Our Educators Are Experienced And Passionate About Early Childhood Education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='quality'>
        <div className='quality-left'>
          <p className='pro-head' style={{ color: "white", textAlign: "left", fontSize: "28px" }}>Get Your Quality
          </p>
          <h1 className='head-txt' style={{ color: "white" }}>Come And Be Part Of
            Our Latest Session
          </h1>
          <button className='btn' id='q-btn'>Apply Now <span id='arrow'>➜</span></button>

        </div>
        <div className='quality-right'>
          <img src='https://www.littlecolumbus.com/AssetAdmission/img/ap.png' />
        </div>
      </div>

      <div className='contact'>
        <div className='contact-img'>
          <img src={contact} style={{width:"100%"}}/>
        </div>
        <div className='top-contacts'>
          <div className='contacts' style={{ marginRight: "80px" }}>
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

        <div className='contact-main'>
          <div className='contact-left'>
            <div className='contact-left-in'>
              <div className='contacts'>
                <div className='c-icon'>
                  <IoCall id='c-icon' />
                </div>
                <div className='c-desc'>
                  <p>Call Us</p>
                  <h2>+91 7290905000</h2>
                </div>
              </div>
              <hr />
              <div className='contacts'>
                <div className='c-icon'>
                  <IoMail id='c-icon' />
                </div>
                <div className='c-desc'>
                  <p>Email</p>
                  <h2>Info@ajile.com</h2>
                </div>
              </div>
              <hr />
              <div className='contacts'>
                <div className='c-icon'>
                  <MdLocationOn id='c-icon' />
                </div>
                <div className='c-desc'>
                  <p>Location</p>
                  <h2>Grand Columbus International School, Sector 16A Faridabad
                  </h2>
                </div>
              </div>

            </div>
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.239908290905!2d77.1058184752806!3d28.412016975785885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1920c7540fb1%3A0x3fd0580958e89a23!2sAjiledone%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1719403374882!5m2!1sen!2sin" allowfullscreen="" style={{ width: "100%", border: "1px solid #f15d28", borderRadius: "5px 5px 13px 13px", height: "200px" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className='contact-right'>
            <h1 className='head-txt' style={{ color: "" }}>Get In Touch

            </h1>
            <h3>Have Questions Or Want To Schedule A Visit? We'd Love To Hear From You!</h3>
            <form className='c-form'>
              <div className='entry'>
                <div>
                  <h3>Full Name* </h3>
                  <input required placeholder='Your Name' />
                </div>
                <div id='phone'>
                  <h3>Phone Number* </h3>
                  <input required placeholder='Phone Number' />
                </div>
              </div>
              <div className='entry' style={{marginTop:"20px"}}>
                <div>
                  <h3>Parent Name*  </h3>
                  <input required placeholder='Parent Name' />
                </div>
                <div id='phone'>
                  <h3>Email Address* </h3>
                  <input required placeholder='Your Email' />
                </div>
              </div>
              <div className='entry' style={{marginTop:"20px"}}>
                <div>
                  <h3>Write Message* </h3>
                  <input id='message' placeholder='Write Message' />
                </div>
              </div>
              <button className='btn' style={{marginTop:"51px", width:"220px"}}>Send Message <span id='arrow'>➜</span></button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero