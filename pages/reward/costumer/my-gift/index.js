import Link from 'next/link';
import { useEffect } from 'react';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHistory } from 'react-icons/ai';
import moment from 'moment/moment';
import Footer from '../../../../components/footer';
import Navbar from '../../../../components/navbar';
import TabRewardCostumer from '../../../../components/rewards/tabs-reward-costumer';
import {
  costumerState, asyncRewardCostumersNew,
} from '../../../../core/redux/reducers/costumerSlice';
import Paramcrypt from '../../../../lib/Paramcrypt';
import resolveImage from '../../../../lib/resolveImage';

export default function MyGift() {
  const { dataRewardCostumersNew } = useSelector(costumerState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncRewardCostumersNew());
  }, []);

  return (
    <>
      <Navbar />
      <TabRewardCostumer />
      <div className="px-9 my-10">
        <div className="flex flex-col gap-6">
          {dataRewardCostumersNew?.map((item) => (
            <div className="flex flex-col gap-0 shadow1 bg-[#9E0000] text-white rounded-lg" key={item?.id}>
              <center>
                <img src={resolveImage(item?.picture)} alt="thumbnail" className="h-80 w-full bg-cover rounded-lg" />
              </center>
              <div className="flex justify-between items-center w-full py-4 px-4">
                <div className="flex flex-row gap-2 items-center">
                  {item?.used_merchant === '0' && (
                    <>
                      <AiOutlineHistory size={40} />
                      <div className="flex flex-col gap-1">
                        <small>kadaluarsa</small>
                        <div className="bg-[#F2F79E] text-red-600 font-semibold rounded-sm  py-1 text-sm px-2">
                          {moment(item?.expired).format('LLLL')}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <Link href={`/reward/costumer/my-gift/${Paramcrypt.encode(item?.id)}`}>
                  <button type="button" className="bg-[#3D9705] text-white shadow-inner py-3 px-3 w-56 rounded-md capitalize hover:p-2 duration-200">lihat detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
