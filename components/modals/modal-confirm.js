import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ModalConfirm({ onConfirm, onHide, reward }) {
  const style = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };
  const background = {
    background: 'linear-gradient(130.76deg, rgba(214, 0, 0, 0.5) -8.36%, rgba(32, 4, 4, 0.5) 62.57%)',
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-[#F17070] rounded-2xl">
          <div className="relative p-6 flex-auto overflow-hidden rounded-2xl" style={background}>
            <div className="flex items-center flex-col gap-2 h-96 w-80 m-5">
              <Image
                src="/assets/images/warning.png"
                alt="Picture of the author"
                width={58}
                height={225}
              />
              <div className="absolute left-0 bottom-6 w-full flex flex-row px-10 z-20 justify-center">
                <button type="button" className="bg-[#21B26F] uppercase font-semibold text-base py-3 px-4 mx-2 w-full shadow-inner text-white rounded-md" onClick={() => onConfirm()}>
                  Confirm
                </button>
                <button type="button" className="bg-[#E71618] uppercase font-semibold text-base py-3 px-4 mx-2 w-full shadow-inner text-white rounded-md" onClick={() => onHide()}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black" />
    </>
  );
}
