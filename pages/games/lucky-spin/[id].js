import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import moment from 'moment/moment';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import LuckySpin from '../../../components/lucky-spin';
import Paramcrypt from '../../../lib/Paramcrypt';
import ApiClient from '../../../services/ApiClient';
import {
  luckyspinState, asyncTokenLuckyspin, asyncLuckyspin, asyncStatusLuckyspin, asyncExchangeLuckyspin,
} from '../../../core/redux/reducers/luckyspinSlice';
import ModalRewards from '../../../components/modals/modal-rewards';
import { getCurrentUser, asyncProfile } from '../../../core/redux/reducers/authenticationSlice';

export default function Luckyspin() {
  const { query, push } = useRouter();
  const { id } = query;
  const dispatch = useDispatch();
  const { luckyspinToken, luckyspin, dataStatusLuckyspin } = useSelector(luckyspinState);
  const currentUser = useSelector(getCurrentUser);
  const [options, setOptions] = useState();

  useEffect(() => {
    if (id) {
      const idDe = Paramcrypt.decode(id);
      dispatch(asyncLuckyspin({ id: idDe }));
      dispatch(asyncTokenLuckyspin());
    }
  }, [id]);
  useEffect(() => {
    if (luckyspin) {
      const resReward = luckyspin?.reward?.map((item) => ({ option: item.title }));
      setOptions(resReward);
    }
  }, [luckyspin]);

  const [modalReward, setModalReward] = useState(false);
  const [reward, setReward] = useState();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const idDe = Paramcrypt.decode(id);
      dispatch(asyncStatusLuckyspin({ id: idDe })).then((res) => {
        const isSpin = res?.payload?.status;
        if (isSpin) {
          const newPrizeNumber = Math.floor(Math.random() * luckyspin.reward.length);
          setPrizeNumber(newPrizeNumber);
          setReward(luckyspin.reward[newPrizeNumber]);
          setMustSpin(true);
        }
      });
    }
  };
  const exchangeReward = () => {
    setModalReward(true);
    const idDe = Paramcrypt.decode(id);
    dispatch(asyncExchangeLuckyspin({ id: idDe, reward_id: reward?.id })).then((res) => {
      dispatch(asyncTokenLuckyspin());
      dispatch(asyncProfile());
      setMustSpin(false);
    });
  };
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute -top-36 left-0">
          <img src="/assets/images/lucky1.svg" alt="bg" className="w-screen" />
        </div>

        <div className="absolute -bottom-36 right-0">
          <img src="/assets/images/lucky2.svg" alt="bg" className="w-screen" />
        </div>

        <div className="flex flex-col gap-20 text-white relative p-10 overflow-hidden">
          <h6 className="m-0 text-4xl font-bold uppercase">lucky spin</h6>
          {options && (
            <div className="flex justify-center items-center">
              <div className="grid grid-flow-row auto-rows-max ">
                <LuckySpin
                  wheelSpinStatus={mustSpin}
                  wheelData={options}
                  onStopSpinning={() => {
                    exchangeReward();
                  }}
                  prizeNumber={prizeNumber}
                  template={luckyspin?.template}
                />
                <center>
                  <button type="button" onClick={handleSpinClick} className="uppercase w-48 font-semibold text-base bg-green-600 hover:bg-green-700  py-3 px-4 shadow-inner text-white rounded-full">
                    Spin Now
                    {' '}
                    {luckyspin?.price}
                    {' '}
                    Token
                  </button>
                </center>
              </div>
            </div>
          )}
          <div className="absolute top-28 right-14">
            <div className="bg-white flex flex-col w-[350px] rounded-xl shadow-inner">
              <div className="border-b-2 text-black font-semibold text-center py-3 px-3 text-base capitalize">
                point kamu :
                {' '}
                <b className="text-blue-700">
                  {currentUser?.total_point ? currentUser?.total_point : 0}
                  {' '}
                  Point
                </b>
              </div>
              <div className="border-b-2 capitalize text-black font-semibold text-center shadow-inner py-3 px-3 text-base">
                Token kamu :
                {' '}
                <b className="text-red-700">
                  {luckyspinToken?.token}
                  {' '}
                  Token
                </b>
              </div>
              <div className="border-b-2 capitalize text-black font-semibold text-center shadow-inner py-3 px-3 rounded-b-xl text-base">
                Token luckyspin kamu :
                {' '}
                <b className="text-green-700">
                  {luckyspinToken?.token_luckyspin}
                  {' '}
                  Token
                </b>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 left-8 z-10">
            <div className="flex flex-col gap-2">
              <h6 className="m-0 capitalize text-sm">keterangan</h6>
              <h6 className="text-white text-lg">
                Daily token akan di reset setiap
                {' '}
                {moment(luckyspinToken?.token_luckyspin_expired).format('LLLL')}
              </h6>
            </div>
          </div>
        </div>
      </div>
      {modalReward && (
        <ModalRewards
          onHide={() => setModalReward(false)}
          reward={reward}
        />
      )}
      <Footer />
    </>
  );
}
