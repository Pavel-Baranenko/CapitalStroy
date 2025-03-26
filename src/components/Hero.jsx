'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Autoplay, Pagination, Parallax]);

export default function Hero() {

  return (
    <section className="hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        parallax={true}
        className='hero__swiper'
      >
        <SwiperSlide className='hero__swiper-slide'>
          <img src="./img/Plitka-CHernyj-mramor-768x512.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hero__swiper-slide'>
          <img src="./img/keramogranit_napolnyy_610015000360_charme_extra_laurent_nat_ret_30x60_italon_126.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hero__swiper-slide'>
          <img src="./img/i.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='hero__swiper-slide'>
          <img src="./img/Calacatta-Luxe-Decor-Polished-CL01-CL01R-160x320.webp" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="hero__box">
        <div className="container">
          <h1 className="hero__heading">
            Широкий ассортимент плитки и керамогранита
          </h1>

          <div className="search">
            <input type="text" />
            <button className="red-btn">Найти</button>
          </div>

          <span className="hero__subheading">
            От Вас - Доверие, От Нас - Качество.
            Надёжный поставщик- Залог успеха.
          </span>
        </div>
      </div>
    </section>
  )
}
