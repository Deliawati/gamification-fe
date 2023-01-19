/* eslint-disable max-len */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { achivementState } from '../../core/redux/reducers/achivementSlice';

export default function Achievement() {
  const { dataAchivements } = useSelector(achivementState);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const background = {
    background: 'linear-gradient(130.76deg, rgba(214, 0, 0, 0.5) -8.36%, rgba(32, 4, 4, 0.5) 62.57%)',
  };

  return (
    <div className="flex flex-col gap-2">
      {/* <Link href="/profile/achive">
        <h6 className="m-0 text-sm font-semibold text-white text-right cursor-pointer hover:text-green-500">See more</h6>
      </Link> */}
      <Slider {...settings}>
        {dataAchivements?.map((item) => (
          <div className="px-2">
            <div className="rounded-xl py-6 relative overflow-hidden border-2 border-white/50" style={background} key={item.id}>
              <div className="absolute top-2 right-2">
                {item?.status === 1 ? (
                  <div className="bg-[#3D9705] text-white px-4 py-1 rounded-full text-sm font-normal">Done</div>
                ) : (
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-normal">On Progress</div>
                )}
              </div>
              <div className="flex flex-col gap-2 text-white text-center">
                <img src="/assets/images/badge.png" alt="background" className="mx-auto" width={80} />
                <div className="flex flex-col">
                  <h6 className="m-0 text-lg font-semibold">
                    {item?.value}
                  </h6>
                  {item?.status === 1 ? (
                    <small className="text-sm font-normal w-72 mx-auto">{item?.achivement?.description_after}</small>
                  ) : (
                    <small className="text-sm font-normal w-72 mx-auto">{item?.achivement?.description_before}</small>
                  )}

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
