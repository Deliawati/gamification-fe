import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authenticationState,
} from '../../core/redux/reducers/authenticationSlice';

export default function Navbar() {
  const router = useRouter();
  const [scrollHidden, setScrollHidden] = useState(false);
  const { userTypeName } = useSelector(authenticationState);

  useEffect(() => {
    function showHidden() {
      if (window.scrollY >= 30) {
        setScrollHidden(true);
      } else {
        setScrollHidden(false);
      }
    }
    window.addEventListener('scroll', showHidden);
  });
  return (
    <div className={scrollHidden ? 'shadow-md bg-gray-800 fixed top-0 w-full z-50 px-8 py-6' : 'relative bg-transparent border-b-2 border-gray-400 px-8 py-6 z-50'}>
      <div className="flex flex-row justify-between items-center">
        <div className="relative">
          <Link href="/">
            <img src="/assets/images/ingrid_logo.png" alt="telkomsel" width={150} />
          </Link>
        </div>

        <ul className="flex flex-row gap-6 text-white text-sm pt-5">
          <Link href="/">
            <li className={router.pathname === '/' ? 'uppercase text-base font-semibold cursor-pointer border-b-4 pb-1 border-blue-500' : 'uppercase text-base font-semibold cursor-pointer '}>
              beranda
            </li>
          </Link>
          <Link href="/profile">
            <li className={router.pathname.startsWith('/profile') ? 'uppercase text-base font-semibold cursor-pointer border-b-4 pb-1 border-blue-500' : 'uppercase text-base font-semibold cursor-pointer '}>
              profile
            </li>
          </Link>
          <Link href="/games">
            <li className={router.pathname.startsWith('/games') ? 'uppercase text-base font-semibold cursor-pointer border-b-4 pb-1 border-blue-500' : 'uppercase text-base font-semibold cursor-pointer '}>
              games
            </li>
          </Link>
          <Link href={`/reward/${userTypeName}`}>
            <li className={router.pathname.startsWith(`/reward/${userTypeName}`) ? 'uppercase text-base font-semibold cursor-pointer border-b-4 pb-1 border-blue-500' : 'uppercase text-base font-semibold cursor-pointer '}>
              reward
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
