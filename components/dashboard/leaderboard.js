import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import resolveImage from '../../lib/resolveImage';
import Paramcrypt from '../../lib/Paramcrypt';

export default function Leaderboard() {
  const ladderboardSelector = useSelector(({ point }) => point?.ladderboards?.data);
  const [rankSt, setRankSt] = useState();
  const [rankNd, setRankNd] = useState();
  const [rankRd, setRankRd] = useState();
  const [rankTh, setRankTh] = useState();
  useEffect(() => {
    if (ladderboardSelector) {
      setRankSt(ladderboardSelector[0]);
      setRankNd(ladderboardSelector[1]);
      setRankRd(ladderboardSelector[2]);
      setRankTh(ladderboardSelector.filter((item, i) => i > 2));
    }
  }, [ladderboardSelector]);

  return (
    <div className="flex flex-col gap-3 relative">
      <div className="background relative gradient-color rounded-lg">
        <div className="px-4 pt-4">
          <div className="bg-red-800 text-white uppercase text-xs px-5 font-medium w-36 text-center py-2 rounded-full shadow1">best customer</div>

          <div className="flex flex-row gap-4 justify-center overflow-hidden">
            {rankNd && (
              <div className="mt-6 relative">
                <div className="absolute top-0 left-4">
                  <div className="bg-[#E2E2E2] text-black font-semibold rounded-full h-6 w-6 text-xs flex items-center justify-center">2</div>
                </div>
                <div className="flex flex-col text-center gap-1 text-white">
                  <Link href={`/profile/${Paramcrypt.encode(rankNd?.user_gamification?.id)}`}>
                    <img src={resolveImage(rankNd?.user_gamification?.image)} alt="backgroud" className="mx-auto border-2 border-gray-400 bg-cover w-16 h-16 rounded-full cursor-pointer" />
                  </Link>
                  <small className="capitalize font-medium text-xs">{rankNd?.user_gamification?.name}</small>
                  <span className="uppercase font-bold text-base">
                    {rankNd?.value}
                    {' '}
                    <small>point</small>
                  </span>
                </div>
                <div className="gradient-color1 rounded-t-lg h-28 w-28">
                  <div className="flex items-center justify-center h-full text-5xl text-white font-bold">2</div>
                </div>
              </div>
            )}

            {rankSt && (
              <div className="relative">
                <div className="absolute top-0 left-4">
                  <div className="bg-[#E2E2E2] text-black font-semibold rounded-full h-6 w-6 text-xs flex items-center justify-center">1</div>
                </div>
                <div className="flex flex-col text-center gap-1 text-white">
                  <Link href={`/profile/${Paramcrypt.encode(rankSt?.user_gamification?.id)}`}>
                    <img src={resolveImage(rankSt?.user_gamification?.image)} alt="backgroud" className="mx-auto border-2 border-gray-400 bg-cover w-16 h-16 rounded-full cursor-pointer" />
                  </Link>
                  <small className="capitalize font-medium text-xs">{rankSt?.user_gamification?.name}</small>
                  <span className="uppercase font-bold text-base">
                    {rankSt?.value}
                    {' '}
                    <small>point</small>
                  </span>
                </div>
                <div className="gradient-color1 rounded-t-lg h-full w-28">
                  <div className="flex items-center justify-center h-32 text-5xl text-white font-bold">1</div>
                </div>
              </div>
            )}

            {rankRd && (
              <div className="mt-6 relative">
                <div className="absolute top-0 left-4">
                  <div className="bg-[#E2E2E2] text-black font-semibold rounded-full h-6 w-6 text-xs flex items-center justify-center">3</div>
                </div>
                <div className="flex flex-col text-center gap-1 text-white">
                  <Link href={`/profile/${Paramcrypt.encode(rankRd?.user_gamification?.id)}`}>
                    <img src={resolveImage(rankRd?.user_gamification?.image)} alt="backgroud" className="mx-auto border-2 border-gray-400 bg-cover w-16 h-16 rounded-full cursor-pointer" />
                  </Link>
                  <small className="capitalize font-medium text-xs">{rankRd?.user_gamification?.name}</small>
                  <span className="uppercase font-bold text-base">
                    {rankRd?.value}
                    {' '}
                    <small>point</small>
                  </span>
                </div>
                <div className="gradient-color1 rounded-t-lg h-28 w-28">
                  <div className="flex items-center justify-center h-full text-5xl text-white font-bold">3</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {rankTh?.map((item, i) => (
          <div className="gradient-color1 shadow1 text-white rounded-lg" key={item?.id}>
            <div className="flex flex-row justify-between py-3 px-3">
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full w-9 h-9 flex items-center justify-center">{i + 4}</div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Link href={`/profile/${Paramcrypt.encode(item?.user_gamification?.id)}`}>
                  <img src={resolveImage(item?.user_gamification?.image)} alt="backgroud" className="w-10 h-10 rounded-full cursor-pointer" />
                </Link>
                <span className="capitalize font-medium text-sm">{item?.user_gamification?.name}</span>
              </div>
              <div className="text-sm font-medium capitalize flex items-center">
                {item?.value}
                {' '}
                Point
              </div>
              <div className="flex items-center">
                <Link href={`/profile/${Paramcrypt.encode(item?.user_gamification?.id)}`}>
                  <button type="button" className="bg-[#198754] shadow-inner text-white text-sm capitalize rounded-lg py-2 px-4">see more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
