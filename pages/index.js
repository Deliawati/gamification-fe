import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import Navbar from '../components/navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/footer';
import Profile from '../components/dashboard/profile';
import Minigames from '../components/dashboard/minigames';
import Leaderboard from '../components/dashboard/leaderboard';
import Gamification from '../components/dashboard/gamification';
import { fetchLadderboards } from '../slices/pointSlice';
import { asyncCampaigns } from '../core/redux/reducers/campaignSlice';
import { asyncMinigames } from '../core/redux/reducers/minigamesSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const ladderboardSelector = useSelector(({ point }) => point?.ladderboards?.data);
  useEffect(() => {
    dispatch(asyncCampaigns());
    dispatch(asyncMinigames());
    if (ladderboardSelector === null) {
      dispatch(fetchLadderboards());
    }
  }, []);
  return (
    <div className="relative overflow-hidden">
      <Navbar />

      <div className="absolute top-0">
        <img src="/assets/images/background.png" alt="" />
      </div>
      <div className="absolute bottom-36 right-0">
        <img src="/assets/images/background1.png" alt="" />
      </div>

      <div className="relative py-7 px-10 flex flex-col gap-10">
        <Profile />
        <Minigames />
        <Gamification />
        <Leaderboard />
      </div>
      <Footer />
    </div>
  );
}
