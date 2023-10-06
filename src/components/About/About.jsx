import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import me2 from '../../assets/1.jpg';
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
                            <h5>Clients</h5>
                            <small>100+ Worlwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>

                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, modi repellat assumenda minima placeat explicabo iste corrupti ipsa consectetur aperiam praesentium blanditiis quae laboriosam neque sed exercitationem nemo magnam et?
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
