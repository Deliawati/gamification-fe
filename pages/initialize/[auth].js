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
import {
  asyncGenerateToken, authenticationState, getCurrentUser,
} from '../../core/redux/reducers/authenticationSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Initialize() {
  const dispatch = useDispatch();
  const { token, user } = useSelector(authenticationState);
  const { query, push } = useRouter();
  const { auth } = query;
  useEffect(() => {
    if (auth) {
      const data = Paramcrypt.decode(auth);
      const decodeData = {
        email: data?.auth?.email,
        ncli: data?.auth?.ncli,
        nd: data?.auth?.nd,
        msisdn: data?.auth?.msisdn,
        name: data?.auth?.name,
        image: data?.auth?.image,
        join_at: data?.auth?.join_at,
      };
      dispatch(asyncGenerateToken(decodeData));
    }
  }, [auth]);
  useEffect(() => {
    if (token) {
      push(`/embed/6343e66f97fcf?token=${token}`);
    }
  }, [token]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
    </div>
  );
}
