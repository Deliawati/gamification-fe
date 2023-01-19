import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import LuckySpin from '../../components/lucky-spin';

export default function ListGames() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-4 mt-20 px-10 mb-28 h-full">
        <h6 className="m-0 text-sm font-semibold">REKOMENDASI GAMES UNTUK ANDA </h6>
        <Slider {...settings}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
              <div className="px-3 hover:p-2 duration-700 hover:brightness-50">
                <div className="relative overflow-hidden shadow-md">
                  <img src="/assets/images/palpy.png" alt="sadsadsa" className="w-full rounded-lg" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white shadow-inner py-2 px-4 rounded-full text-[#5A5959] font-semibold text-sm">
                      Luckyspin (name)
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
        </Slider>
        <Slider {...settings}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
              <div className="px-3 hover:p-2 duration-700 hover:brightness-50">
                <div className="relative overflow-hidden shadow-md">
                  <img src="/assets/images/palpy.png" alt="sadsadsa" className="w-full rounded-lg" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white shadow-inner py-2 px-4 rounded-full text-[#5A5959] font-semibold text-sm">
                      Luckyspin (name)
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
        </Slider>
      </div>

      <LuckySpin />
      <Footer />
    </>
  );
}
