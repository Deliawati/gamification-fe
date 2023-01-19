import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Paramcrypt from '../../lib/Paramcrypt';
import { minigamesState } from '../../core/redux/reducers/minigamesSlice';

export default function Minigames() {
  const { dataMinigames } = useSelector(minigamesState);
  const settings = {
    dots: false,
    infinite: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  // const [minigames] = useState([
  //   {
  //     id: 2, name: 'Flappy Bird', games: 'flappybird', img: 'palpy.png',
  //   },
  //   {
  //     id: 1, name: 'Lucky Spin', games: 'lucky-spin', img: 'luckyspin.png',
  //   },
  //   {
  //     id: 3, name: '2048', games: '2048', img: '2048.png',
  //   },
  // ]);

  return (
    <div className="flex flex-col gap-2">
      <h6 className="m-0 font-medium text-sm text-[#EAEFF6] uppercase">
        rekomendasi mini games untuk anda
      </h6>
      <Slider {...settings}>
        {dataMinigames?.map((item) => (
          <Link href={`/games/${item.type}/${Paramcrypt.encode(item?.id)}`} key={item?.id}>
            <div className="px-2 cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow">
                <img src={item?.image} alt="background" className="h-72 bg-cover w-full" />
                <div className="absolute top-3 left-3">
                  <div className="bg-white rounded-full px-8 blur py-2 shadow1">
                    <h6 className="m-0 text-sm text-[#5A5959] font-semibold">{item?.type}</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
