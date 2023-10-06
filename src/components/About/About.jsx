import React from 'react'
import './about.css'
import img from '../../assets/Photo.png';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={img} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">

                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Coding Hours</h5>
                            <small>1000+ hrs</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>

                    </div>

                    <p>
                        With a solid foundation in web development and a keen interest in staying up-to-date with the latest technologies, I have gained valuable experience in a wide range of tools and technologies. 
                        I am well-versed in front-end development using React, HTML, CSS, and have a knack for creating visually appealing and responsive user interfaces. My proficiency in back-end development includes Node.js, where I have built robust server-side applications and utilized Redux for state management.
                        In addition to my front-end and back-end skills, I am adept at database management, particularly with MySQL.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
