/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Paramcrypt from '../../../lib/Paramcrypt';
import ApiClient from '../../../services/ApiClient';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import BoardView from '../../../components/game-2048/Board';
import { minigamesState, asyncTokenMinigame, asyncPuzzleNumber } from '../../../core/redux/reducers/minigamesSlice';

export default function PuzzleNumber() {
  const { query, push } = useRouter();
  const { id } = query;
  const [dataSpin, setDataSpin] = useState();
  const dispatch = useDispatch();
  const { dataTokenMinigame, dataPuzzleNumber } = useSelector(minigamesState);

  useEffect(() => {
    if (id) {
      const idDe = Paramcrypt.decode(id);
      dispatch(asyncTokenMinigame());
      dispatch(asyncPuzzleNumber({ id: idDe }));
    }
  }, [id]);
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ];

  const [datas] = useState([
    {
      id: 1, name: 'amanda putri', point: 12, img: 'https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/24/2021/09/collage-26.jpg',
    },
    {
      id: 1, name: 'amanda putri', point: 12, img: 'https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/24/2021/09/collage-26.jpg',
    },
    {
      id: 1, name: 'amanda putri', point: 12, img: 'https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/24/2021/09/collage-26.jpg',
    },
    {
      id: 1, name: 'amanda putri', point: 12, img: 'https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/24/2021/09/collage-26.jpg',
    },
    {
      id: 1, name: 'amanda putri', point: 12, img: 'https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/24/2021/09/collage-26.jpg',
    },
  ]);

  const gradient1 = {
    background: 'linear-gradient(130.76deg, rgba(87, 77, 77, 0.5) -8.36%, rgba(230, 34, 34, 0.8) 62.57%)',
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      <div className="px-28 py-10 h-full">
        <div className="flex justify-center bg-[#C73C3C] py-10 rounded-3xl shadow-md relative overflow-hidden">
          <BoardView />

          <div className="absolute top-6 right-0 w-full">
            <div className="px-10">
              <div className="flex flex-row justify-between items-center">
                <div className="bg-white shadow-inner text-black font-semibold py-2 rounded-full px-10">
                  00 : 00
                </div>
                <div className="flex flex-row gap-8">
                  <div>
                    {dataPuzzleNumber?.reward?.map((item) => (
                      <div>
                        {item?.title}
                        {item?.cost_point}
                      </div>
                    ))}
                  </div>
                  <div className="text-white hover:text-black duration-700 hover:text-4xl text-3xl cursor-pointer">
                    <button type="button" onClick={() => setShowModal(true)}>
                      <FaRegQuestionCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-10 shadow-md">
            <button type="button" className="bg-green-700 hover:bg-green-800 duration-700 text-white shadow-inner text-lg uppercase font-semibold py-2 px-16 rounded-md">
              {`${dataTokenMinigame?.token_minigames || 0} TOKEN`}
            </button>
          </div>
        </div>
      </div>

      {/* show & hide modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white rounded-2xl">
              <div className="flex items-start justify-end p-5 border-b border-solid border-slate-200 rounded-t">
                <button
                  type="button"
                  className="flex flex-row justify-end text-gray-500 text-2xl"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>

              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed h-[500px] overflow-y-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id, perspiciatis autem quos perferendis nostrum provident modi sequi dolores quaerat sit consequuntur ipsam alias deserunt, nesciunt ipsa quasi culpa harum ducimus esse praesentium ullam ipsum nobis incidunt! Earum ipsam repudiandae quis ducimus quibusdam dolor ipsum repellendus incidunt atque quod aut soluta deleniti enim eligendi animi debitis labore vel obcaecati fuga, totam voluptatum autem eius quos! Ratione quo odio itaque quis, porro magni corrupti quos nobis ea cumque! Excepturi libero dolore dignissimos perspiciatis mollitia eligendi similique optio minima molestiae, quia veniam, eius maxime incidunt corrupti asperiores, voluptate dolor impedit repellendus. Molestias totam quam dolorum modi amet minus sunt dicta quia a libero quis, iste possimus repellat quae repudiandae perspiciatis velit adipisci earum fugit. Error, voluptas inventore sequi commodi laudantium modi hic fugiat quaerat non laborum animi deleniti incidunt rerum veritatis nesciunt sunt amet, illo odit aliquam molestias ipsa? Laborum illo ex obcaecati nemo voluptas rem quia repellendus consequatur, cumque deleniti quibusdam, eveniet, reiciendis dolorum magni molestiae cum repellat! Esse mollitia harum vel culpa inventore id obcaecati, cumque eius ut maxime laborum soluta sapiente quasi doloribus, animi alias hic, cum neque iusto ipsam labore! Iusto, id. Quos minima ex beatae quod dolorem?
                </p>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black" />
        </>
      ) : ''}

      <div className="flex flex-col gap-2 px-28 py-10">
        <div className="title">
          <h6 className="m-0 text-2xl font-semibold text-[#EAEFF6] uppercase">Leaderboard mini games</h6>
        </div>

        <div className="flex flex-col gap-3 bg-[#C73C3C] p-10 rounded-3xl shadow-md">
          {
                datas.map((data) => (
                  <div className="text-white flex items-center flex-row justify-between px-4 py-3 rounded-2xl z-10 drop-shadow-lg" style={gradient1} key={data.id}>
                    <div className="img flex flex-row items-center gap-4">
                      <img src={data.img} alt="people" className="h-14 w-14 rounded-full" />
                      <div className="name text-base uppercase font-semibold">
                        {data.name}
                      </div>
                    </div>
                    <div className="point bg-white text-black py-2 px-5 rounded-full">
                      <small className="text-sm font-semibold">
                        Point yang di peroleh :
                        {' '}
                        {data.point}
                      </small>
                    </div>
                  </div>
                ))
            }
        </div>
      </div>

      <Footer />
    </>
  );
}
