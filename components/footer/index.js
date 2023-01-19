import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white px-8 z-10 relative py-14">
      <div className="flex items-center justify-around">
        <div className="flex flex-col gap-2">
          <img src="/assets/images/tsel.png" alt="telkomsel" width={150} />
          <div className="flex flex-col gap-1">
            <small className="w-64">
              Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
              consectetur
            </small>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <h6 className="m-0 font-bold text-sm">Dimana Kita Sekarang</h6>
          <ul>
            {
                [
                  { id: 1, name: 'Dimana Kita sekarang?' },
                  { id: 2, name: 'Dimana Kita sekarang?' },
                  { id: 3, name: 'Dimana Kita sekarang?' },
                  { id: 4, name: 'Dimana Kita sekarang?' },
                ].map((data) => (
                  <li className="text-sm font-normal lowercase" key={data.id}>{data.name}</li>
                ))
            }
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h6 className="m-0 font-bold text-sm">Dimana Kita Sekarang</h6>
          <ul>
            {
                [
                  { id: 1, name: 'Dimana Kita sekarang?' },
                  { id: 2, name: 'Dimana Kita sekarang?' },
                  { id: 3, name: 'Dimana Kita sekarang?' },
                  { id: 4, name: 'Dimana Kita sekarang?' },
                ].map((data) => (
                  <li className="text-sm font-normal lowercase" key={data.id}>{data.name}</li>
                ))
            }
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h6 className="m-0 font-bold text-sm">Dimana Kita Sekarang</h6>
          <ul>
            {
                [
                  { id: 1, name: 'Dimana Kita sekarang?' },
                  { id: 2, name: 'Dimana Kita sekarang?' },
                  { id: 3, name: 'Dimana Kita sekarang?' },
                  { id: 4, name: 'Dimana Kita sekarang?' },
                ].map((data) => (
                  <li className="text-sm font-normal lowercase" key={data.id}>{data.name}</li>
                ))
            }
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h6 className="m-0 font-bold text-sm">Dimana Kita Sekarang</h6>
          <ul>
            {
                [
                  { id: 1, name: 'Dimana Kita sekarang?' },
                  { id: 2, name: 'Dimana Kita sekarang?' },
                  { id: 3, name: 'Dimana Kita sekarang?' },
                  { id: 4, name: 'Dimana Kita sekarang?' },
                ].map((data) => (
                  <li className="text-sm font-normal lowercase" key={data.id}>{data.name}</li>
                ))
            }
          </ul>
        </div>
      </div>
    </footer>
  );
}
