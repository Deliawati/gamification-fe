import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import moment from 'moment/moment';
import Paramcrypt from '../../lib/Paramcrypt';
import { campaignState, asyncCampaigns } from '../../core/redux/reducers/campaignSlice';

export default function Gamification() {
  const { dataCampaigns } = useSelector(campaignState);
  const settings = {
    dots: false,
    infinite: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="flex flex-col gap-2">
      <h6 className="m-0 font-medium text-sm text-[#EAEFF6] uppercase">
        rekomendasi campaign untuk anda
      </h6>
      <Slider {...settings}>
        {dataCampaigns?.map((item) => (
          <div key={item.id} className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow">
              <Image src="/assets/images/campaign.png" width={200} height={100} alt="background" className="w-full bg-cover" />
              <div className="absolute top-3 left-3">
                <div className="bg-white rounded-full px-8 blur py-2 shadow1">
                  <h6 className="m-0 text-sm text-[#5A5959] font-semibold">{item?.name}</h6>
                </div>
              </div>
              <div className="absolute bottom-3 right-3">
                <Link href={`/campaign/${Paramcrypt.encode(item?.id)}`}>
                  <button type="button" className="bg-[#ED4345] text-white text-xs font-semibold px-5 py-3 rounded-md shadow-inner">Lihat Campaign</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
