import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ModalRewards({ onHide, reward }) {
  const style = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-[#F17070] rounded-2xl">
          <div className="relative p-6 flex-auto overflow-hidden rounded-2xl">
            <div className="absolute -top-28 -left-28">
              <div className="rounded-full h-60 w-60" style={style} />
            </div>
            <div className="flex flex-col gap-2 h-96">
              <h6 className="text-3xl capitalize my-4 font-semibold m-0 text-center relative z-20 text-white">
                Congratulation
              </h6>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-5xl font-bold text-center text-white">{reward?.title}</h3>
                </div>
              </div>
              <div className="absolute left-0 bottom-6 w-full flex flex-row px-10 z-20 justify-center">
                <button type="button" onClick={() => onHide()} className="uppercase font-semibold text-base bg-green-600 py-3 px-4 w-full shadow-inner text-white rounded-full">
                  Oke
                </button>
              </div>
            </div>
            <div className="absolute -bottom-28 -right-28">
              <div className="rounded-full h-60 w-60" style={style} />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black" />
    </>
  );
}
