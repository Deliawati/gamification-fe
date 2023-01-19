import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import moment from 'moment';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import resolveImage from '../../lib/resolveImage';
import Paramcrypt from '../../lib/Paramcrypt';
import ApiClient from '../../services/ApiClient';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const dispatch = useDispatch();
  const [profileSelector, setProfileSelector] = useState();
  const { query, push } = useRouter();
  const { id } = query;
  useEffect(() => {
    if (id) {
      const idDe = Paramcrypt.decode(id);
      ApiClient().get(`/user/${idDe}`)
        .then((res) => {
          if (res?.data?.status) {
            setProfileSelector(res?.data?.data);
          }
        }).catch((error) => {
          console.log('error', error);
        })
        .finally(() => {
          console.log('finish');
        });
    }
  }, [id]);

  const gradient = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };

  const gradient1 = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <img src="/assets/images/profile-bg.png" alt="background" className="border-b-4 border-black w-full" />
        <div className="absolute top-4 right-4">
          <div className="h-16 w-16 flex flex-col justify-center items-center rounded-full shadow-lg text-white" style={gradient}>
            <b className="text-sm font-bold">{profileSelector?.level}</b>
            <small className="text-xs uppercase font-semibold">level</small>
          </div>
        </div>
        <div className="absolute bottom-24 right-4">
          <span className="text-sm font-normal text-white">
            Bergabung sejak
            {' '}
            {moment(profileSelector?.join_at).format('LL')}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="-mt-32 ml-16">
            <img src={resolveImage(profileSelector?.image)} alt="profile" width={300} className="border-2 border-white rounded-md" />
          </div>
          <div className="ml-8">
            <div className="flex flex-col gap-2">
              <h6 className="m-0 text-base font-semibold capitalize text-white">
                {profileSelector?.name}
              </h6>
              <div className="flex flex-col gap-1">
                <progress className="progress progress-error w-56 bg-white" value={profileSelector?.exp || 0} max={profileSelector?.exp_level || 0} />
                <div className="text-right text-white text-sm">
                  {`${profileSelector?.exp || 0}/${profileSelector?.exp_level || 0}`}
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
                {profileSelector?.total_point ? profileSelector?.total_point : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
          <div className="flex flex-col w-full rounded-lg shadow3">
            <div className="bg-[#E71618] py-4 rounded-t-lg shadow-inner1" />
            <div className="py-8 text-center bg-white flex flex-col gap-1">
              <span className="text-base font-bold uppercase text-[#5A5959]">TOTAL COMPLETION</span>
              <span className="text-4xl font-bold text-[#5A5959]">
                {profileSelector?.achievement_complete ? profileSelector?.achievement_complete : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
          <div className="flex flex-col w-full rounded-lg shadow3">
            <div className="bg-[#E71618] py-4 rounded-t-lg shadow-inner1" />
            <div className="py-8 text-center bg-white flex flex-col gap-1">
              <span className="text-base font-bold uppercase text-[#5A5959]">TOTAL ACHIEVEMENT</span>
              <span className="text-4xl font-bold text-[#5A5959]">
                {profileSelector?.challenge_complete ? profileSelector?.challenge_complete : 0}
              </span>
            </div>
            <div className="py-4 rounded-b-lg" style={gradient1} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
