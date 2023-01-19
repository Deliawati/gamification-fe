import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CgSmartHomeLight } from 'react-icons/cg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Navbar from '../../../components/navbar/index';
import Footer from '../../../components/footer/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TabRewardCostumer from '../../../components/rewards/tabs-reward-costumer';
import resolveImage from '../../../lib/resolveImage';
import Paramcrypt from '../../../lib/Paramcrypt';
import {
  costumerState, asyncCategory, asyncRewardCostumers, asyncRewardCostumersNew,
} from '../../../core/redux/reducers/costumerSlice';

export default function Reward() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = useState(null);
  const { dataCategory, dataRewardCostumers, dataRewardCostumersNew } = useSelector(costumerState);
  useEffect(() => {
    dispatch(asyncCategory());
    dispatch(asyncRewardCostumers());
    dispatch(asyncRewardCostumersNew());
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settingsCategory = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const filterData = (category_id) => {
    if (filterCategory === category_id) {
      setFilterCategory(null);
      dispatch(asyncRewardCostumers());
    } else {
      setFilterCategory(category_id);
      dispatch(asyncRewardCostumers({ category_id }));
    }
  };
  return (
    <>
      <Navbar />
      <TabRewardCostumer />
      <div className="px-9 my-10 flex flex-col gap-9">
        <div className="wrapper ">
          <Slider {...settingsCategory}>
            {dataCategory?.map((item) => (
              <div
                role="presentation"
                className="box-content h-32 w-24"
                key={item?.category_id}
                onClick={() => filterData(item?.category_id)}
              >
                <center>
                  <div
                    className={item?.category_id === filterCategory
                      ? 'bg-red-600 text-black hover:bg-red-600 duration-300 border-2 border-white rounded-full h-24 w-24 flex items-center justify-center cursor-pointer'
                      : 'bg-[#263238] text-black hover:bg-red-600 duration-300 hover:border-2 border-white rounded-full h-24 w-24 flex items-center justify-center cursor-pointer'}
                  >
                    <div className="bg-red-600 text-white rounded-lg p-3">
                      <CgSmartHomeLight size={25} />
                    </div>
                  </div>
                  <small className="capitalize text-white cursor-pointer">{item?.category_name}</small>
                </center>
              </div>
            ))}
          </Slider>
        </div>
        <div className="wrapper">
          <div className=" bg-white h-screen relative overflow-hidden rounded-lg shadow1  overflow-y-auto">
            <div className="absolute top-0 w-full">
              <img src="/assets/images/hadiah.png" alt="background" className="w-full bg-cover h-auto" />
            </div>
            <div className="absolute top-7 px-9 text-white">
              <h6 className="text-2xl text-white font-semibold m-0 capitalize">list hadiah yang tersedia</h6>
            </div>
            <div className="absolute top-20 px-9 w-full">
              <div className="grid grid-cols-5 gap-6 w-full mb-10">
                {dataRewardCostumers?.map((item) => (
                  <div className="wrapper rounded-lg shadow1 relative overflow-hidden cursor-pointer hover:p-2 duration-500 bg-transparent" key={item?.id}>
                    <Link href={`${router.pathname}/${Paramcrypt.encode(item?.id)}`}>
                      <img src={resolveImage(item?.picture)} alt="background" className="bg-cover rounded-lg" />
                      <div className="absolute bottom-0 left-0">
                        <div className="bg-white text-black flex flex-row items-center gap-1 py-3 px-4 shadow-inner rounded-tr-xl">
                          <h6 className="text-lg font-bold m-0">{item?.price}</h6>
                          <small className="text-red-600 uppercase font-semibold">
                            point
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
