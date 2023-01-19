import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../core/redux/reducers/authenticationSlice';

export default function TabRewardCostumer() {
  const router = useRouter();
  const user = useSelector(getCurrentUser);
  return (
    <>
      <div className="relative overflow-hidden">
        <img src="/assets/images/profile-bg.png" alt="background" className="bg-cover w-full border-b-4 border-gray-800" />
        <div className="absolute top-0 w-full py-4">
          <div className="flex justify-between px-9 text-white">
            <Link href="/">
              <div className="flex flex-row gap-2 capitalize items-center active:text-red-600 cursor-pointer">
                <MdOutlineKeyboardArrowLeft size={30} />
                <small className="text-sm">
                  beranda
                </small>
              </div>
            </Link>
            <Link href={`${router.pathname}/history`}>
              <div className="flex flex-col gap-1 capitalize items-center cursor-pointer">
                <FaHistory size={30} />
                <small>history</small>
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute top-28 w-full text-white px-9">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium capitalize">total poin saya</span>
            <h6 className="m-0 text-5xl font-bold flex flex-col gap-1 w-44">
              {user?.total_point ? user?.total_point : 0}
              <div className="border-b-4 border-red-600 w-full" />
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-white -mt-10 relative mx-9 rounded-md shadow1">
        <div className="flex flex-row">
          <Link href="/reward/costumer">
            <h6 className={router.pathname === '/reward/costumer' ? 'py-4 px-10 w-full text-center asu border-b-4 border-red-600 font-semibold text-red-600 cursor-pointer' : 'py-4 px-10 w-full text-center cursor-pointer text-gray-800'}>Lihat Penawaran Hadiah</h6>
          </Link>
          <Link href="/reward/costumer/my-gift">
            <h6 className={router.pathname === '/reward/costumer/my-gift' ? 'py-4 px-10 w-full text-center asu border-b-4 border-red-600 font-semibold text-red-600 cursor-pointer' : 'py-4 px-10 w-full text-center cursor-pointer text-gray-800'}>Hadiah Saya</h6>
          </Link>
        </div>
      </div>
    </>
  );
}
