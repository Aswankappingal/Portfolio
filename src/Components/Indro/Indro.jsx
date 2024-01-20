import React, { useEffect, useState } from 'react'
import './Indro.scss'
//  import { Link } from 'react-router-dom';

const Indro = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

        if (isDarkMode) {
            body.classList.add('dark-mode');
            setDarkMode(true);
            darkModeToggle.checked = true;
        }

        const handleDarkModeToggle = () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
                setDarkMode(true);
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
                setDarkMode(false);
            }
        };

        darkModeToggle.addEventListener('change', handleDarkModeToggle);

        return () => {
            darkModeToggle.removeEventListener('change', handleDarkModeToggle);
        };
    }, []);


    return (


        <div>
            <div className='whole-ind'>
                <header className="container">
                    <div className="page-header">
                        <div className="logo">
                            <a href="#">ashvy</a>
                        </div>
                        <input type="checkbox" id="click" />

                        <label htmlFor="click" className="mainicon">
                            <div className="menu">
                                <i className='bx bx-menu'></i>
                            </div>
                        </label>
                        <ul>
                            <li><a href="#" className="active" style={{ '--navAni': 1 }}>Home</a></li>
                            <li><a href="#" style={{ '--navAni': 2 }}>About</a></li>
                            <li><a href="#" style={{ '--navAni': 3 }}>Skills</a></li>
                            <li><a href="#" style={{ '--navAni': 4 }}>Portfolio</a></li>
                            <li><a href="#3" style={{ '--navAni': 5 }}>Contact</a></li>
                        </ul>
                        <label className="mode">
                            <input type="checkbox" id="darkModeToggle" />
                            <i className='bx bxs-moon'></i>
                        </label>
                    </div>
                </header>

                <section className="container">
                    <div className="main">
                        <div className="images">
                            <img src="/WhatsApp Image 2024-01-18 at 11.24.32 AM.jpeg" alt="" className="img-w" />
                            <span className="bg-effect-1"></span>
                        </div>
                        <div className="detail">
                            <h3>Hi, I'm</h3>
                            <h1><span style={{ color: '#f9532d' }}>Aswan</span> Kappingal</h1>
                            <p>I'm a professional Web Developer. Our Main Goal is to help & satisfy local & global clients with web development solutions.</p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/aswan-kappingal-a26a292aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ '--socialAni': 1 }}><i className='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/__ashvy_732?igsh=MTlxdTVtZHlrd3Axdw==" style={{ '--socialAni': 2 }}><i className='bx bxl-instagram'></i></a>
                                <a href="https://github.com/Aswankappingal" style={{ '--socialAni': 3 }}><i className='bx bxl-github'></i></a>
                                <a href="https://youtube.com/@aswan.kaswan8217?si=zJ7MlmXjWRk-oAa4" style={{ '--socialAni': 4 }}><i className='bx bxl-youtube'></i></a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>


































        </div>
    )
}

export default Indro
