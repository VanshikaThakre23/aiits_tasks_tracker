import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './Homepage.css'
import { useNavigate } from 'react-router-dom';


const Homepage = ({ data }) => {
// const[slideClick , setSlideClick] = useState([]);

const navigate = useNavigate();

const handleSlideClick =()=>{
navigate("/products");

}


  if(!data || data === "") return "no data";

  return (

    <>

    <div className="text">
        <h2>Buy What you want to !</h2>
    </div>
      <Swiper 
        className='swiper'
        modules={[Navigation, Pagination, Scrollbar , Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
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
          data.slice(0, 90).map((item) => { 
            return(
            <SwiperSlide key={item.id} className='swiper-slide' onClick={handleSlideClick}>
              <img src={item.image} alt="image"/>
              <h2> {item.category}</h2>
            </SwiperSlide>
            )
          })
        }
      </Swiper>


    </>
  )
}

export default Homepage;