import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Paramcrypt from '../../lib/Paramcrypt';
import { minigamesState, asyncMinigames } from '../../core/redux/reducers/minigamesSlice';
import { luckyspinState, asyncLuckyspins } from '../../core/redux/reducers/luckyspinSlice';

function Games() {
  const dispatch = useDispatch();
  const { dataMinigames } = useSelector(minigamesState);
  const { luckyspins } = useSelector(luckyspinState);

  useEffect(() => {
    dispatch(asyncMinigames());
    dispatch(asyncLuckyspins());
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 mt-20 px-10 mb-36">
        <h6 className="m-0 text-sm font-semibold">REKOMENDASI GAMES UNTUK ANDA </h6>
        <div className="grid grid-cols-4 gap-4">
          <div className="minigames">
            {dataMinigames?.map((item) => (
              <Link href={`/games/${item?.type}/${Paramcrypt.encode(item?.id)}`} key={item?.id}>
                <div className="hover:p-2 duration-700 hover:brightness-50">
                  <div className="relative overflow-hidden shadow-md">
                    <img src={item?.image} alt="thumbnail" className="w-full rounded-lg" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white shadow-inner py-2 px-4 rounded-full text-[#5A5959] font-semibold text-sm">
                        {item?.type}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="luckyspin">
            {luckyspins?.map((item) => (
              <Link href={`/games/lucky-spin/${Paramcrypt.encode(item?.id)}`} key={item?.id}>
                <div className="hover:p-2 duration-700 hover:brightness-50">
                  <div className="relative overflow-hidden shadow-md">
                    <img src={item?.image} alt="sadsadsa" className="w-full rounded-lg" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white shadow-inner py-2 px-4 rounded-full text-[#5A5959] font-semibold text-sm">
                        Luckyspin (
                        {item?.price}
                        )
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Games;
