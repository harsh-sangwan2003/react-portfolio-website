import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/avatar1.jpg';
import avtr2 from '../../assets/avatar2.jpg';
import avtr3 from '../../assets/avatar3.jpg';
import avtr4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: avtr1,
    name: "Tina snow",
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore quisquam, nulla fugiat reiciendis praesentium quo ut quia provident exercitationem corporis tempore expedita iusto harum ratione rem aut laudantium esse.'
  },
  {
    avatar: avtr2,
    name: "Tina snow",
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore quisquam, nulla fugiat reiciendis praesentium quo ut quia provident exercitationem corporis tempore expedita iusto harum ratione rem aut laudantium esse.'
  },
  {
    avatar: avtr3,
    name: "Tina snow",
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore quisquam, nulla fugiat reiciendis praesentium quo ut quia provident exercitationem corporis tempore expedita iusto harum ratione rem aut laudantium esse.'
  },
  {
    avatar: avtr4,
    name: "Tina snow",
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore quisquam, nulla fugiat reiciendis praesentium quo ut quia provident exercitationem corporis tempore expedita iusto harum ratione rem aut laudantium esse.'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className='testimonial' key={index}>

              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>

              <h5 className='client__name'>{name}</h5>
              <small className='clinet__review'>
                {review}
              </small>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  )
}

export default Testimonials
