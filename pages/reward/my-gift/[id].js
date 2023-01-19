import React from 'react';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';

export default function Hadiah() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 px-9 my-16">
        <img src="/assets/images/hadiah1.png" alt="thumbnail" className="h-80 w-full bg-cover" />
        <div className="flex flex-col gap-2 text-white">
          <h6 className="m-0 title font-semibold text-xl capitalize">Lorem ipsum dolor sit amet, con.</h6>
          <p className="m-0 text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa venenatis, iaculis mi nec.
            Aliquet feugiat nisi, purus imperdiet et. At pellentesque gravida nunc,
            eget vehicula suspendisse proin. Risus turpis lobortis eget
            netus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa venenatis, iaculis mi nec. Aliquet feugiat nisi,
            purus imperdiet et. At pellentesque gravida nunc, eget vehicula
            suspendisse proin. Risus turpis
            lobortis eget netus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa venenatis,
            iaculis mi nec. Aliquet feugiat nisi, purus imperdiet et. At pellentesque gravida nunc,
            eget vehicula suspendisse proin. Risus turpis lobortis eget netus.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Massa venenatis, iaculis mi nec. Aliquet feugiat nisi,
            purus imperdiet et.
            At pellentesque gravida nunc, eget vehicula suspendisse proin. Risus turpis
            lobortis eget netus.
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <input type="text" className="bg-white border-2 border-gray-400 shadow-inner py-2 font-semibold w-96 text-base rounded-md px-2" value="IKUT-FFML-98MG-FF18" disabled />
          <button type="button" className="bg-[#3D9705] shadow-inner text-white px-4 rounded-md w-36">Copy</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
