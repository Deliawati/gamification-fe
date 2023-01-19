import React from 'react';

export default function Description({ onEnroll, dataCheckEnroll, campaign }) {
  return (
    <div className="text-white grid grid-cols-6 gap-4 focus:outline-none">
      <div className="col-span-2 flex flex-col gap-3">
        <img src="/assets/images/campaign.png" alt="background" />
        {dataCheckEnroll === false && (
          <button
            type="button"
            className="bg-[#3D9705] text-white font-semibold rounded-sm text-sm shadow-inner uppercase py-3 px-3 w-full"
            onClick={() => onEnroll()}
          >
            join campaign
          </button>
        )}
        {dataCheckEnroll && (
          <button
            type="button"
            className="bg-blue-500 text-white font-semibold rounded-sm text-sm shadow-inner uppercase py-3 px-3 w-full"
          >
            joined
          </button>
        )}
      </div>
      <div className="col-span-4">
        <h6 className="font-medium text-xl capitalize pt-2">{campaign?.name}</h6>
        <p className="m-0 text-sm font-normal">
          {campaign?.description}
        </p>
      </div>
    </div>
  );
}
