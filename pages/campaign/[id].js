/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Tab } from '@headlessui/react';
import { toast } from 'react-toastify';
import Navbar from '../../components/navbar';
import Description from '../../components/view-challenge/description';
import ChallengeTabs from '../../components/view-challenge/challenge';
import Footer from '../../components/footer';
import Paramcrypt from '../../lib/Paramcrypt';
import {
  campaignState, asyncCheckEnroll, asyncEnroll, asyncChallenge, asyncSyncChallenge,
} from '../../core/redux/reducers/campaignSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Challenge() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;
  const { dataCampaigns, dataCheckEnroll } = useSelector(campaignState);

  const [campaign, setCampaign] = useState();
  const [isJoin, setIsJoin] = useState(null);
  useEffect(() => {
    if (id) {
      const deId = parseInt(Paramcrypt.decode(id), 10);
      const selectCampaign = dataCampaigns?.find((item) => item.id === deId);
      if (selectCampaign) {
        setCampaign(selectCampaign);
      }
      dispatch(asyncSyncChallenge(deId));
      dispatch(asyncChallenge(deId));
      dispatch(asyncCheckEnroll(deId));
    }
  }, [id, dataCampaigns]);
  const [dummy] = useState([
    { id: 1, name: 'Description' },
    { id: 2, name: 'Challenge' },
  ]);

  const dummyData = false;
  const onEnroll = (() => {
    const deId = Paramcrypt.decode(id);
    dispatch(asyncEnroll(deId))
      .then((res) => {
        const status = res?.payload?.status;
        if (status) toast.success(res?.payload?.message);
        if (status) dispatch(asyncCheckEnroll(deId));
        if (!status) toast.warning(res?.payload?.message);
      });
  });

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <header className="relative overflow-hidden flex flex-col z-10">
        {
          dummyData ? (
            <marquee className="bg-white text-xl font-semibold uppercase shadow-inner py-2">selamat anda mendapatkan tiket menuju neraka</marquee>
          ) : (
            ''
          )
        }
        <img src="/assets/images/banner.png" alt="background" className="w-full bg-cover" />
      </header>

      <div className="px-8 flex flex-col gap-4 pb-5 z-20 relative py-10">
        <div className="flex flex-col gap-2 text-center mb-5">
          <h6 className="m-0 text-white text-3xl font-semibold uppercase">{campaign?.pic_name}</h6>
          <hr className="bg-white w-full mx-auto" />
        </div>

        <Tab.Group>
          <Tab.List className="bg-white rounded-lg">
            {
              dummy.map((data) => (
                <Tab
                  key={data.id}
                  className={({ selected }) => classNames(
                    selected
                      ? (data.id === 1 ? 'bg-[#9E0000] text-white text-base font-medium py-3 px-5 focus:outline-none rounded-l-lg' : 'bg-[#9E0000] text-white text-base font-medium py-3 px-5 focus:outline-none')
                      : 'text-black text-sm font-normal py-3 px-5 focus:outline-none',
                  )}
                >
                  {data.name}
                </Tab>
              ))
            }
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Description
                onEnroll={onEnroll}
                dataCheckEnroll={dataCheckEnroll}
                campaign={campaign}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ChallengeTabs />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="absolute bottom-0 -left-2 w-screen">
        <img src="/assets/images/bg-challenge.png" alt="background" className="bg-cover w-full" />
      </div>

      <Footer />
    </div>
  );
}
