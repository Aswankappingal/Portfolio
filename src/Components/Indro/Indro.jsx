// import './Indro.scss'
//  import { Link } from 'react-router-dom';
import './Indro2.scss'

const Indro = () => {



  return (


    <div>
      <div>
        <header id="header">
          <div className="logo">
            <a href="#" id="logo">ashvy</a>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="mainicon">
            <div className="menu" id="menu">
              <i className="bi bi-list"></i>
            </div>
          </label>
          <nav>
            <a href="#">Home</a>
            <a href="#" style={{ '--navAni': 2 }}>About</a>
            <a href="#" style={{ '--navAni': 3 }}>Skills</a>
            <a href="#" style={{ '--navAni': 4 }}>Portfolio</a>
            <a href="#" style={{ '--navAni': 5 }}>Contact</a>
          </nav>
        </header>

        <section>
          <div className="main pp">
            <div className="Information">
              <h3>Hi, I'm Aswan</h3>
              <h1>Web Developer</h1>
              <p>I'm a professional Web Developer. My Main Goal to help & Satisfice the Local & Global Clients by web development solutions</p>
              <div className="social">
                <a href="https://github.com/Aswankappingal" style={{ '--socialAni': 3 }}><i className="bi bi-github"></i></a>
                <a href="https://youtube.com/@aswan.kaswan8217?si=zJ7MlmXjWRk-oAa4" style={{ '--socialAni': 4 }}><i className="bi bi-youtube"></i></a>
                <a href="https://www.instagram.com/__ashvy_732?igsh=MTlxdTVtZHlrd3Axdw==" style={{ '--socialAni': 2 }}><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aswan-kappingal-a26a292aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ '--socialAni': 1 }}><i className="bi bi-linkedin"></i></a>
              </div>
              <button className="cv-btn"
               onClick={() => window.open('/Aswan.pdf')}>Download CV</button>
            </div>
            <div className="images">
              <div className="blue-bg-outer">
                <div className="white-bg">
                  <div className="blue-bg">
                    <img src="/WhatsApp_Image_2024-01-18_at_11.24.32_AM-removebg-preview.png" alt="image" />
                    <span className="bg-effect-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>



































    )
}

export default Indro
