import React from 'react'
import './header.css'
import CTA from './CTA.jsx';
import me2 from '../../assets/1.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Harsh Sangwan</h1>
        <h3 className='text-light'>FullStack Developer</h3>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <div className="me-image">
            <img src={me2} alt="Me" />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
