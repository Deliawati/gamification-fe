import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tab } from '@headlessui/react';
import Footer from '../../../../components/footer';
import Navbar from '../../../../components/navbar';
import Ongoing from '../../../../components/history/costumer/on-going';
import Expired from '../../../../components/history/costumer/expired';
import {
  asyncRewardCostumersNew, asyncRewardCostumersExpired,
} from '../../../../core/redux/reducers/costumerSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function History() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncRewardCostumersNew());
    dispatch(asyncRewardCostumersExpired());
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-9 my-10">
        <Tab.Group>
          <Tab.List className="bg-white shadow1 rounded-t-lg">
            {
                ['masih berlaku', 'sudah lewat'].map((data) => (
                  <Tab
                    key={data}
                    className={({ selected }) => classNames(
                      selected
                        ? 'border-b-4 border-red-600 text-[#E71618] text-lg font-semibold py-3 px-3 capitalize w-72'
                        : 'text-gray-800 text-lg font-medium py-3 px-3 capitalize w-72',
                    )}
                  >
                    {data}

                  </Tab>
                ))
            }

          </Tab.List>
          <Tab.Panels className="mt-5">
            <Tab.Panel><Ongoing /></Tab.Panel>
            <Tab.Panel><Expired /></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <Footer />
    </>
  );
}
