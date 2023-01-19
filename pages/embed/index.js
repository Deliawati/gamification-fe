/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Navbar from '../../components/navbar';
import Description from '../../components/view-challenge/description';
import ChallengeTabs from '../../components/view-challenge/challenge';
import Footer from '../../components/footer';
import Paramcrypt from '../../lib/Paramcrypt';
import ApiPublic from '../../services/ApiPublic';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Initialize() {
  const { query, push } = useRouter();
  useEffect(() => {
    const data = {
      auth: {
        email: 'emailkosong@telkom.co.id',
        ncli: '09463880',
        nd: 'USERDUMMY1',
        msisdn: '65131912',
        name: 'AKUN TESTING 1',
        image: 'https://gamebrott.com/wp-content/uploads/2021/09/8-Fakta-Raiden-Shogun-Genshin-Impact-yang-Perlu-Kamu-Ketahui-Header-1-750x375.jpg',
        join_at: '2021-10-03',
      },
    };
    const result = Paramcrypt.encode(data);
    push(`/initialize/${result}`);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
    </div>
  );
}
