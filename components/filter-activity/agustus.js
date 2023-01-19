import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';

export default function Agustus() {
  const [dummy] = useState([
    {
      id: 1,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
    {
      id: 2,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
    {
      id: 3,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
    {
      id: 4,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
    {
      id: 5,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
    {
      id: 6,
      date: '19 agustus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ',
      point: 'success',
    },
  ]);

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
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
    <div className="flex flex-col gap-1">
      {
                dummy.map((data) => (
                  <div key={data.id}>
                    {
                        data.id === 1
                          ? (
                            <div className="flex flex-col w-full rounded-lg shadow1">
                              <div className="bg-[#E71618] text-white text-sm font-medium py-2 rounded-t-lg px-4">{data.date}</div>
                              <div className="bg-white text-black py-6 rounded-b-lg px-4 flex justify-between items-center">
                                <h6 className="m-0 text-base font-medium">{data.description}</h6>
                                <h6 className="m-0 text-lg font-bold text-green-600">{data.point}</h6>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-5 flex flex-col w-full rounded-lg shadow1">
                              <div className="bg-[#E71618] text-white text-sm font-medium py-2 rounded-t-lg px-4">{data.date}</div>
                              <div className="bg-white text-black py-6 rounded-b-lg px-4 flex justify-between items-center">
                                <h6 className="m-0 text-base font-medium">{data.description}</h6>
                                <h6 className="m-0 text-lg font-bold text-green-600">{data.point}</h6>
                              </div>
                            </div>
                          )
                    }
                  </div>
                ))
            }
    </div>
  );
}
