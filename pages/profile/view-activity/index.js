import React from 'react';
import { Tab } from '@headlessui/react';
import Navbar from '../../../components/navbar';
import Januari from '../../../components/filter-activity/januari';
import Februari from '../../../components/filter-activity/februari';
import Maret from '../../../components/filter-activity/maret';
import April from '../../../components/filter-activity/april';
import Mei from '../../../components/filter-activity/mei';
import Juni from '../../../components/filter-activity/juni';
import Juli from '../../../components/filter-activity/juli';
import Agustus from '../../../components/filter-activity/agustus';
import Footer from '../../../components/footer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ViewActivity() {
  return (
    <>
      <Navbar />

      <div className="px-16 py-10">
        <Tab.Group>
          <Tab.List className="bg-white w-full flex justify-between">
            {
            ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'].map((data) => (
              <Tab
                key={data}
                className={({ selected }) => classNames(
                  selected
                    ? 'bg-[#9E0000] text-white text-lg font-semibold w-36 py-4'
                    : 'text-gray-700 w-36 py-4',
                )}
              >
                {data}
              </Tab>
            ))
        }
          </Tab.List>
          <Tab.Panels className="mt-6 mb-10">
            <Tab.Panel><Januari /></Tab.Panel>
            <Tab.Panel><Februari /></Tab.Panel>
            <Tab.Panel><Maret /></Tab.Panel>
            <Tab.Panel><April /></Tab.Panel>
            <Tab.Panel><Mei /></Tab.Panel>
            <Tab.Panel><Juni /></Tab.Panel>
            <Tab.Panel><Juli /></Tab.Panel>
            <Tab.Panel><Agustus /></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <Footer />
    </>
  );
}
