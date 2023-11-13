import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/harsh-sangwan2003" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/harsh-sangwan2003" target='_blank'><FaGithub /></a>
            <a href="https://drive.google.com/file/d/1l-wobtgf2cnU2cSNgpu-eot3ZM09q1zz/view?usp=sharing" target='_blank'><CgWebsite /></a>
        </div>
    )
}

export default HeaderSocials
