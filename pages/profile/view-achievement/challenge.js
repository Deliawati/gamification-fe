/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Navbar from '../../../components/navbar/index';
import Footer from '../../../components/footer/index';
import Dropdown from '../../../components/dropdown';

export default function AchievementChallenge() {
  const [dummy] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const background = {
    background: 'linear-gradient(130.76deg, rgba(214, 0, 0, 0.5) -8.36%, rgba(32, 4, 4, 0.5) 62.57%)',
  };

  const background1 = {
    background: 'linear-gradient(268.86deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 49.12%, rgba(255, 255, 255, 0) 99.9%, rgba(255, 255, 255, 0) 99.91%)',
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-3 px-16 py-16 mb-6">
        <h6 className="m-0 text-4xl font-semibold uppercase text-white">achievement</h6>

        <div className="grid grid-cols-3 gap-2 w-full px-1">
          <Dropdown />
          {
                dummy.map((data) => (
                  <div key={data.id} className="text-white shadow1 rounded-md flex flex-col gap-2 border-2 border-white/30" style={background}>
                    <div className="flex flex-row gap-2 pt-4 px-4">
                      <img src="/assets/images/achievement.png" alt="background" />
                      <div className="flex flex-col gap-2 pt-2 w-full">
                        <div className="flex justify-between items-center">
                          <h6 className="m-0 text-base font-semibold uppercase">login</h6>
                          <small>7/10</small>
                        </div>
                        <small className="font-normal text-xs capitalize">login 7 hari berturut-turut</small>
                      </div>
                    </div>
                    <div className="px-4 pb-4 flex flex-col gap-2">
                      <small className="font-semibold">1000 xp</small>
                      <progress className="progress progress-error w-full bg-white" value="20" max="100" />
                    </div>
                  </div>
                ))
            }

          <div className="col-span-1 p-2 mt-4" style={background1}>
            <div className="flex justify-between">
              <div className="bg-white flex items-center justify-center shadow-inner active:bg-red-300">
                <button type="button">
                  <MdOutlineKeyboardArrowLeft size={30} />
                </button>
              </div>
              <span className="text-white text-lg font-bold">1/3</span>
              <div className="bg-white flex items-center justify-center shadow-inner active:bg-red-300">
                <button type="button">
                  <MdOutlineKeyboardArrowRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
