/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Tab } from '@headlessui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../components/navbar';
import Activity from '../../components/profile/activity';
import Point from '../../components/profile/point';
import Achievement from '../../components/profile/achievement';
import TotalTransaksi from '../../components/profile/total-transaksi';
import Footer from '../../components/footer';
import { fetchProfile, fetchActivity } from '../../slices/meSlice';
import resolveImage from '../../lib/resolveImage';
import { menuProfile } from '../../store/master.data';
import { fetchHistory } from '../../slices/transactionSlice';
import { fetchPoints } from '../../slices/pointSlice';
import { getCurrentUser } from '../../core/redux/reducers/authenticationSlice';
import { asyncAchivements, asyncSyncAchivement } from '../../core/redux/reducers/achivementSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const [level, setLevel] = useState({ labelLevel: 0, valueLevel: 0 });
  useEffect(() => {
    if (currentUser === null) {
      dispatch(fetchActivity());
    }
    dispatch(asyncSyncAchivement());
  }, []);
  useEffect(() => {
    if (currentUser?.level_value) {
      const keys = Object.keys(currentUser?.level_value);
      for (let index = 0; index < keys.length; index += 1) {
        const element = keys[index];
        setLevel(currentUser?.level_value[element]);
        setLevel({ labelLevel: element, valueLevel: currentUser?.level_value[element] });
      }
    }
  }, [currentUser]);

  const gradient = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };

  const gradient1 = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };
  const actionMenu = (id) => {
    switch (id) {
      case 1:
        return dispatch(fetchActivity());
      case 2:
        return dispatch(fetchPoints());
      case 3:
        return dispatch(asyncAchivements());
      case 4:
        return dispatch(fetchHistory());
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <img src="/assets/images/profile-bg.png" alt="background" className="border-b-4 border-black w-full" />
        <div className="absolute top-4 right-4">
          <div className="h-16 w-16 flex flex-col justify-center items-center rounded-full shadow-lg text-white" style={gradient}>
            <b className="text-sm font-bold">{currentUser?.level}</b>
            <small className="text-xs uppercase font-semibold">level</small>
          </div>
        </div>
        <div className="absolute bottom-24 right-4">
          <span className="text-sm font-normal text-white">
            Bergabung sejak
            {' '}
            {moment(currentUser?.join_at).format('LL')}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="-mt-32 ml-16">
            <img src={resolveImage(currentUser?.image)} alt="profile" width={300} className="border-2 border-white rounded-md" />
          </div>
          <div className="ml-8">
            <div className="flex flex-col gap-2">
              <h6 className="m-0 text-base font-semibold capitalize text-white">
                {currentUser?.name}
              </h6>
              <div className="flex flex-col gap-1">
                <progress className="progress progress-error w-56 bg-white" value={currentUser?.exp} max={currentUser?.exp_level} />
                <div className="text-right text-white text-sm">
                  {`${currentUser?.exp}/${currentUser?.exp_level}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 mt-10 flex flex-col gap-8 mb-10">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-full rounded-lg shadow3">
            <div className="bg-[#E71618] py-4 rounded-t-lg shadow-inner1" />
            <div className="py-8 text-center bg-white flex flex-col gap-1">
              <span className="text-base font-bold uppercase text-[#5A5959]">TOTAL POINT</span>
              <span className="text-4xl font-bold text-[#5A5959]">
                {currentUser?.total_point ? currentUser?.total_point : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
          <div className="flex flex-col w-full rounded-lg shadow3">
            <div className="bg-[#E71618] py-4 rounded-t-lg shadow-inner1" />
            <div className="py-8 text-center bg-white flex flex-col gap-1">
              <span className="text-base font-bold uppercase text-[#5A5959]">TOTAL COMPLETION</span>
              <span className="text-4xl font-bold text-[#5A5959]">
                {currentUser?.achievement_complete ? currentUser?.achievement_complete : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
          <div className="flex flex-col w-full rounded-lg shadow3">
            <div className="bg-[#E71618] py-4 rounded-t-lg shadow-inner1" />
            <div className="py-8 text-center bg-white flex flex-col gap-1">
              <span className="text-base font-bold uppercase text-[#5A5959]">TOTAL ACHIEVEMENT</span>
              <span className="text-4xl font-bold text-[#5A5959]">
                {currentUser?.challenge_complete ? currentUser?.challenge_complete : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
        </div>

        <div className="wrapper">
          <Tab.Group>
            <Tab.List className="bg-white w-full rounded-lg">
              {menuProfile.map((item) => (
                <Tab
                  key={item.id}
                  className={({ selected }) => classNames(
                    selected
                      ? item.title === 'activity' ? ('bg-[#9E0000] text-white w-52 capitalize focus:outline-none px-6 py-3 rounded-l-lg font-medium text-lg') : ('bg-[#9E0000] text-white w-52 capitalize focus:outline-none px-6 py-3 font-medium text-lg')
                      : 'color1 font-normal capitalize focus:outline-none text-base px-6 py-3 w-52',
                  )}
                  onClick={() => actionMenu(item.id)}
                >
                  {item.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-4">
              <Tab.Panel><Activity /></Tab.Panel>
              <Tab.Panel><Point /></Tab.Panel>
              <Tab.Panel><Achievement /></Tab.Panel>
              <Tab.Panel><TotalTransaksi /></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <Footer />
    </>
  );
}
