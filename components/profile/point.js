import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import moment from 'moment';

export default function Point() {
  const pointsSelector = useSelector(({ point }) => point?.points?.data);
  const profileSelector = useSelector(({ me }) => me?.profile?.data);
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 2000,
    vertical: true,
    verticalSwiping: true,
    beforeChange(currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange(currentSlide) {
      console.log('after change', currentSlide);
    },
  };

  return (
    <div className="flex flex-col gap-2">
      <h6 className="m-0 capitalize font-semibold text-base text-white">
        Result Point
        {' '}
        {profileSelector?.name}
      </h6>
      <Slider {...settings}>
        {pointsSelector?.map((item) => (
          <div key={item.id}>
            <div className="mb-5 flex flex-col w-full rounded-lg shadow1">
              <div className="bg-[#E71618] text-white text-sm font-medium py-2 rounded-t-lg px-4">{moment(item?.created_at).format('LL')}</div>
              <div className="bg-white text-black py-6 rounded-b-lg px-4 flex justify-between items-center">
                <h6 className="m-0 text-base font-medium">{item?.label}</h6>
                <h6 className="m-0 text-lg font-bold text-[#ED4345]">
                  +
                  {item?.value}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
