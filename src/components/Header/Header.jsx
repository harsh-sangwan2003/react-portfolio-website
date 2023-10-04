import React from 'react'
import './header.css'
import CTA from './CTA.jsx';
import me from '../../assets/me.png';
import me2 from '../../assets/1.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Harsh Sangwan</h1>
        <h3 className='text-light'>FullStack Developer</h3>

        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={me} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
