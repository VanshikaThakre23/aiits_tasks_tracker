import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './Homepage.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';


const Homepage = ({ data }) => {
  // const[slideClick , setSlideClick] = useState([]);

  const navigate = useNavigate();

  const handleSlideClick = () => {
    navigate("/products");

  }


  if (!data || data === "") return "no data";

  return (

    <>
      <div className="homepage-container">
        <Swiper
          className="homepage-swiper"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={true}     
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
         >
          {data.slice(0, 9).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content" onClick={handleSlideClick}>

                {/* LEFT side */}
                <div className="slide-text">
                  <h2>{item.category}</h2>
                  <h3>{item.title}</h3>
                  <p>Exclusive collection just for you</p>
                </div>

                {/*--------- RIGHT side ---------*/}
                <div className="slide-image">
                  <img src={item.image} alt="image not found" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  )
}

export default Homepage;