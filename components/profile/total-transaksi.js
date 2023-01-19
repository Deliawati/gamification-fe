import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function TotalTransaksi() {
  const historySelector = useSelector(({ transaction }) => transaction?.history?.data);
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
        Result transaksi
        {' '}
        {profileSelector?.name}
      </h6>

      <Slider {...settings}>
        {historySelector?.map((item) => (
          <div className="mb-5 flex flex-col w-full rounded-lg shadow1" key={item?.id}>
            <div className="bg-[#E71618] text-white text-sm font-medium py-2 rounded-t-lg px-4">{moment(item?.created_at).format('LL')}</div>
            <div className="bg-white text-black py-6 rounded-b-lg px-4 flex justify-between items-center">
              <h6 className="m-0 text-base font-medium">{item?.detail}</h6>
              <h6 className="m-0 text-lg font-bold text-[#ED4345]">{item?.value?.toLocaleString()}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
