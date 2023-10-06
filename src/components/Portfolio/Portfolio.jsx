import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Amazon Price Tracker',
    github: 'https://github.com/harsh-sangwan2003/Amazon-Price-Tracker',
    demo: 'https://streamable.com/3zzzhr'
  },
  {
    id: 2,
    image: img2,
    title: 'Edge Ledger Website',
    github: 'https://github.com/harsh-sangwan2003/Edge-Ledger-Website',
    demo: 'https://harsh-sangwan2003.github.io/Edge-Ledger-Website/'
  },
  {
    id: 3,
    image: img3,
    title: 'React Portfolio Website',
    github: 'https://github.com/harsh-sangwan2003/react-potfolio-website',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 4,
    image: img4,
    title: 'Insta Reels',
    github: 'https://github.com/harsh-sangwan2003/insta-reels',
    demo: 'https://harsh-insta-reels-clone.netlify.app/login'
  },
  {
    id: 5,
    image: img5,
    title: 'Camera Gallery App',
    github: 'https://github.com/harsh-sangwan2003/movies-app',
    demo: 'https://harsh-sangwan2003.github.io/Camera-Gallery-App/'
  },
  {
    id: 6,
    image: img6,
    title: 'File System Organizer',
    github: 'https://github.com/harsh-sangwan2003/File-System-Organiser',
    demo: 'https://app.gemoo.com/share/home?codeId=DW4g9QeoGWAeQ'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => (
            <article className="portfolio__item" key={id}>

              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>

            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio
