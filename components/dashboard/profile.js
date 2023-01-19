import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import resolveImage from '../../lib/resolveImage';
import { getCurrentUser } from '../../core/redux/reducers/authenticationSlice';

export default function Profile() {
  const [level, setLevel] = useState({ labelLevel: 0, valueLevel: '0%' });
  const user = useSelector(getCurrentUser);
  useEffect(() => {
    if (user?.level) {
      const exp = parseInt(user?.exp, 10);
      const exp_level = parseInt(user?.exp_level, 10);
      const persen = (exp / exp_level) * 100;
      setLevel({ labelLevel: user?.level, valueLevel: `${persen}%` });
    }
  }, [user]);
  const background = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };

  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <Link href="/profile/">
          <img src={resolveImage(user?.image)} alt="avatar-user" className="cursor-pointer rounded-full h-32 w-32 bg-cover border-4 border-white" />
        </Link>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1 text-white">
            <small className="uppercase text-sm font-normal">selamat datang</small>
            <h6 className="m-0 font-semibold text-lg">{user?.name}</h6>

            <div className="flex flex-col gap-1">
              <label htmlFor="level">
                <small className="font-semibold text-xs">
                  Level
                </small>
                {' '}
                <b className="text-sm font-bold">{user?.level}</b>
              </label>
              <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div id="level" className="bg-red-600 h-4 rounded-full dark:bg-blue-500 shadow-inner" style={{ width: level?.valueLevel }} />
              </div>
            </div>
          </div>
          <button type="button">
            <IoIosArrowForward size={30} className="text-white mb-6" />
          </button>
        </div>
      </div>

      <div className="relative bg-white text-[#5A5959] flex flex-col gap-4 w-full rounded-lg shadow1">
        <div className="bg-[#E71618] w-full py-2 rounded-t-lg text-right px-3 text-white text-sm">19 agustus 1000</div>
        <div className="px-6 flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase">total point anda</span>
            <span className="flex flex-row gap-2 items-center">
              <b className="text-4xl font-bold">{user?.total_point}</b>
              <small className="uppercase">point</small>
            </span>
          </div>
          <button type="button" className="bg-[#9E0000] text-white font-bold text-base px-5 w-32 rounded-full py-1">Now</button>
        </div>
        <div className="w-full py-4 rounded-b-lg" style={background} />
      </div>
    </>
  );
}
