/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { campaignState } from '../../core/redux/reducers/campaignSlice';

export default function Challenge() {
  const { dataChallenge } = useSelector(campaignState);
  return (
    <div className="flex flex-col gap-3">
      {dataChallenge?.map((item) => (
        <div className="text-white focus:outline-none gradient-color2 py-4 px-3 rounded-lg z-20 relative overflow-hidden" key={item?.id}>
          <div className="flex flex-row gap-5">
            <img src="/assets/images/challenge.png" alt="background" className="h-24 w-56" />
            <div className="flex flex-col gap-2 pt-2">
              <h6 className="m-0 text-sm font-semibold">
                {item?.challenge?.title}
              </h6>
              <p className="m-0 text-xs font-normal">
                {item?.challenge?.description}
              </p>
            </div>
            <div className="absolute top-0 right-0 bg-white text-[#5A5959] px-6 text-sm font-semibold rounded-b-lg rounded-r-none py-1">
              {`${item?.challenge?.reward_max_value}/${item?.challenge?.reward_value}`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
