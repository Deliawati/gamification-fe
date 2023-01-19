import Link from 'next/link';
import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineHistory } from 'react-icons/ai';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import TabsHadiah from '../../../components/rewards/tabs-gift';

export default function MyGift() {
  return (
    <>
      <Navbar />
      <TabsHadiah />

      <div className="px-9 my-10">
        <div className="flex flex-col gap-6">
          {
                [1, 2, 3, 4, 5, 6, 7].map((data) => (
                  <div className="flex flex-col gap-0 shadow1 bg-[#9E0000] text-white rounded-lg">
                    <img src="/assets/images/bg-vocer.png" alt="background" className="w-full rounded-t-lg" />
                    <div className="flex justify-between items-center w-full py-4 px-4">
                      <div className="flex flex-row gap-2 items-center">
                        <AiOutlineHistory size={40} />
                        <div className="flex flex-col gap-1">
                          <small>kadaluarsa</small>
                          <div className="bg-[#F2F79E] text-red-600 font-semibold rounded-sm  py-1 text-sm px-2">
                            10-10-2002
                          </div>
                        </div>
                      </div>
                      <Link href="/reward/my-gift/1">
                        <button type="button" className="bg-[#3D9705] text-white shadow-inner py-3 px-3 w-56 rounded-md capitalize hover:p-2 duration-200">lihat detail</button>
                      </Link>
                    </div>
                  </div>
                ))
            }
        </div>
      </div>
      <Footer />
    </>
  );
}
