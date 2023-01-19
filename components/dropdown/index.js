/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function Dropdown() {
  const router = useRouter();

  return (
    <div className="flex justify-end px-1 col-span-3 mb-4">
      <div className="dropdown">
        <label tabIndex="0" className="py-2.5 px-4 rounded-md w-64 flex justify-between bg-white text-black shadow-inner border-0">
          <span className="capitalize text-sm font-medium">achievement</span>
          <MdOutlineKeyboardArrowDown size={24} />
        </label>
        <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded-md w-64">
          <Link href="/profile/view-achievement/transaksi" className="py-10">
            <li className={router.pathname === '/profile/view-achievement/transaksi' ? 'text-sm font-medium capitalize cursor-pointer p-3 text-white bg-red-600' : 'text-sm font-medium capitalize cursor-pointer text-black p-3'}>
              transaksi
            </li>
          </Link>
          <Link href="/profile/view-achievement/challenge">
            <li className={router.pathname === '/profile/view-achievement/challenge' ? 'text-sm font-medium capitalize cursor-pointer p-3 text-white bg-red-600' : 'text-sm font-medium capitalize cursor-pointer text-black p-3'}>
              challenge
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
