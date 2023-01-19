import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Tooltip, Button,
} from '@material-tailwind/react';
import moment from 'moment';
import Footer from '../../../../components/footer';
import Navbar from '../../../../components/navbar';
import {
  costumerState, asyncGetKey, asyncRewardCostumersNew,
} from '../../../../core/redux/reducers/costumerSlice';
import Paramcrypt from '../../../../lib/Paramcrypt';
import resolveImage from '../../../../lib/resolveImage';
import ModalConfirm from '../../../../components/modals/modal-confirm';

export default function Hadiah() {
  const {
    dataRewardCostumersNew, dataGetkey, errorGetkey, loadingGetKey,
  } = useSelector(costumerState);
  const dispatch = useDispatch();
  const [reward, setReward] = useState();
  const { query, push } = useRouter();
  const { id } = query;
  const [modalConfirm, setModalConfirm] = useState(false);
  const [isGetKey, setIsGetKey] = useState(false);

  useEffect(() => {
    if (id) {
      const idDe = Paramcrypt.decode(id);
      const selectReward = dataRewardCostumersNew?.find((item) => item.id === idDe);
      setReward(selectReward);
      console.log(selectReward);
    }
  }, [id, dataRewardCostumersNew]);

  const handleRedeem = (() => {
    setModalConfirm(false);
    dispatch(asyncGetKey({ trx_id: reward?.trx_id, redeem_key: reward?.redeem_key }))
      .then((res) => {
        const status = res?.payload?.status;
        if (status) {
          setReward({ ...reward, used_merchant: '1' });
          toast.success('Tukar Vocher Success');
          dispatch(asyncRewardCostumersNew());
        }
      });
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 px-9 my-16">
        {/* <img src={reward?.picture} alt="thumbnail" className="h-80 w-full bg-cover" /> */}
        <center>
          <img src={resolveImage(reward?.picture)} alt="thumbnail" className="h-80 w-auto bg-cover rounded-lg" />
        </center>
        <div className="flex flex-col gap-2 text-white">
          <h6 className="m-0 title font-semibold text-xl capitalize">{reward?.title}</h6>
          <p className="m-0 text-sm font-normal">
            {reward?.description}
          </p>
        </div>
        {reward?.used_merchant === '0' && reward?.is_expired === '0' && (
          <div className="flex flex-row gap-4">
            <button
              type="button"
              className="py-2 bg-[#3D9705] shadow-inner text-white px-4 rounded-md w-36"
              onClick={() => setModalConfirm(true)}
              disabled={loadingGetKey}
            >
              Use Voucher
            </button>
          </div>
        )}
        {reward?.used_merchant === '1' && (
          <div className="flex flex-row gap-4">
            <Tooltip content="Copy to clipboard" placement="right-end">
              <div
                onClick={() => navigator.clipboard.writeText(reward?.redeem_key)}
                role="presentation"
                className="bg-white cursor-pointer border-2 border-gray-400 shadow-inner py-2 font-semibold w-96 text-base rounded-md px-2"
              >
                {reward?.redeem_key}
              </div>
            </Tooltip>
          </div>
        )}
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
