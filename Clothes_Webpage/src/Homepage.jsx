import React from 'react'
import { Navigation, Pagination, Scrollbar,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './Homepage.css'


const Homepage = ({ data }) => {

  if(!data || data === "") return "no data";

  return (

    <>
      <Swiper 
        className='swiper'
        modules={[Navigation, Pagination, Scrollbar , Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation = {true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay:3000}
        }

        onSlideChange={() => {
          console.log("Slides Change");
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        {
          data.slice(0, 10).map((item) => { 
            return(
            <SwiperSlide key={item.id} className='swiper-slide'>
              <img src={item.image} alt="image"/>
              <h2>...{ item.category}...</h2>
            </SwiperSlide>
            )
          })
        }
      </Swiper>


    </>
  )
}

export default Homepage;