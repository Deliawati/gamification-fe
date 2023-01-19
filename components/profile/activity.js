import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function Activity() {
  const activitySelector = useSelector(({ me }) => me?.activity?.data);
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    // speed: 2000,
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
      {/* <div className="flex justify-between">
        <h6 className="m-0 capitalize font-semibold text-base text-white">bulan november 2022</h6>
        <Link href="/profile/view-activity/">
          <h6 className="m-0 font-medium cursor-pointer text-base text-white hover:text-green-600">
            See more
          </h6>
        </Link>
      </div> */}
      <Slider {...settings}>
        {activitySelector?.map((item) => (
          <div className="mt-5 flex flex-col w-full rounded-lg shadow1" key={item?.id}>
            <div className="bg-[#E71618] text-white text-sm font-medium py-2 rounded-t-lg px-4">{moment(item?.created_at).format('LL')}</div>
            <div className="bg-white text-black py-6 rounded-b-lg px-4 flex justify-between items-center">
              <h6 className="m-0 text-base font-medium">{item?.activity}</h6>
              <h6 className="m-0 text-lg font-bold text-red-600 capitalize">{item?.label}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
