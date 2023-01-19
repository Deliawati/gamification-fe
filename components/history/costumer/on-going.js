import { useSelector } from 'react-redux';
import { BiTime } from 'react-icons/bi';
import moment from 'moment';
import resolveImage from '../../../lib/resolveImage';
import { costumerState } from '../../../core/redux/reducers/costumerSlice';

export default function Ongoing() {
  const { dataRewardCostumersNew } = useSelector(costumerState);
  return (
    <div className="flex flex-col gap-6">
      {dataRewardCostumersNew?.map((item) => (
        <div className="relative" key={item?.id}>
          <img src="/assets/images/bg-1.png" alt="Vocher" className="h-48 w-full " />
          <div className="flex flex-row h-48 pl-10 pr-20 pt-5 pb-5 absolute top-0 left-0 right-0 bottom-0">
            <div className="basis-1/5 relative overflow-hidden">
              <div className="absolute top-0 left-4 w-full">
                <img src={resolveImage(item?.picture)} alt="Vocher" className="h-full bg-cover w-[300px] rounded-lg" />
              </div>
            </div>
            <div className="basis-4/5 border-4 rounded-xl border-white/25 text-white p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center text-right">
                  <BiTime size={40} />
                  <div className="flex flex-col gap-1">
                    <small className="capitalize font-normal">kadaluarsa</small>
                    <span className="text-md font-semibold">{moment(item?.expired).format('LL')}</span>
                  </div>
                </div>
                <div className="wrapper flex flex-col gap-10 overflow-hidden">
                  <p className="m-0 text-sm overflow-hidden">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
