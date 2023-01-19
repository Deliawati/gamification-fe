import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import Paramcrypt from '../../../lib/Paramcrypt';
import { fetchCostumerDetail } from '../../../slices/rewardSlice';
import resolveImage from '../../../lib/resolveImage';
import {
  costumerState, asyncRewardCostumer, asyncRedeem,
} from '../../../core/redux/reducers/costumerSlice';
import ModalConfirm from '../../../components/modals/modal-confirm';

export default function Hadiah() {
  const dispatch = useDispatch();
  const { query, push } = useRouter();
  const { voucherId } = query;
  const [reward, setReward] = useState();
  const { dataRewardCostumer } = useSelector(costumerState);
  const [modalConfirm, setModalConfirm] = useState(false);

  useEffect(() => {
    if (voucherId) {
      const idDe = Paramcrypt.decode(voucherId);
      dispatch(asyncRewardCostumer(idDe));
    }
  }, [voucherId]);
  useEffect(() => {
    if (dataRewardCostumer) {
      setReward(dataRewardCostumer[0]);
    }
  }, [dataRewardCostumer]);
  const handleRedeem = (() => {
    setModalConfirm(false);
    dispatch(asyncRedeem({ voucherId: reward?.voucher_id, redeemKey: reward?.reedem_key }))
      .then((res) => {
        console.log(res.payload);
        const status = res?.payload?.status;
        if (status) {
          const idDe = Paramcrypt.decode(voucherId);
          dispatch(asyncRewardCostumer(idDe));
          toast.success('Tukar Vocher Success');
        }
      });
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 px-9 my-16">
        <center>
          <img src={resolveImage(reward?.picture)} alt="thumbnail" className="h-80 w-auto bg-cover rounded-lg" />
        </center>
        <div className="flex flex-col gap-2 text-white">
          <h6 className="m-0 title font-semibold text-xl capitalize">{reward?.title}</h6>
          <p className="m-0 text-sm font-normal">
            {reward?.description}
          </p>
          <p className="m-0 text-sm font-normal">
            {reward?.merchant}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <input type="text" className="bg-white border-2 border-gray-400 shadow-inner py-2 font-semibold w-96 text-base rounded-md px-2" value={`${reward?.price} Point`} disabled />
          <button type="button" className="bg-[#3D9705] shadow-inner text-white px-4 rounded-md w-36" onClick={() => setModalConfirm(true)}>Tukar Vocher</button>
        </div>
      </div>
      {modalConfirm && (
        <ModalConfirm
          onHide={() => setModalConfirm(false)}
          reward={reward}
          onConfirm={handleRedeem}
        />
      )}
      <Footer />
    </>
  );
}
