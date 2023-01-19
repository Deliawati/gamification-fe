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
  asyncGenerateToken, authenticationState, getCurrentUser, setEmbed,
} from '../../core/redux/reducers/authenticationSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Embed() {
  const dispatch = useDispatch();
  const { user } = useSelector(authenticationState);
  const { query, push } = useRouter();
  const { appKey, token } = query;
  useEffect(() => {
    if (appKey && token) {
      dispatch(setEmbed({ appKey, token }));
    }
  }, [appKey]);
  useEffect(() => {
    if (user) {
      push('/');
    }
  }, [user]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
    </div>
  );
}
