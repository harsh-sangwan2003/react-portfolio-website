import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 2,
    image: img2,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 3,
    image: img3,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 4,
    image: img4,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 1,
    image: img1,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 5,
    image: img5,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
  },
  {
    id: 6,
    image: img6,
    title: 'Crypto Currency & Financial Visualisation',
    github: 'https://www.github.com',
    demo: 'https://dribbble.com/shots/22683253-BlockAI-Blockchain-Explorer-for-Crypto-Copy-Trading-Dashboard?utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=extej&utm_content=BlockAI%20Blockchain%20Explorer%20for%20Crypto%20Copy%20Trading%20Dashboard&utm_medium=Social_Share'
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
