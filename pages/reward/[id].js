import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Paramcrypt from '../../lib/Paramcrypt';
import { fetchCostumerDetail } from '../../slices/rewardSlice';
import resolveImage from '../../lib/resolveImage';

export default function Hadiah() {
  const dispatch = useDispatch();
  const { query, push } = useRouter();
  const { id } = query;
  const [costumer, setCostumer] = useState();
  const costumerDetail = useSelector(({ reward }) => reward?.costumer?.detail?.data);
  const costumerList = useSelector(({ reward }) => reward?.costumer?.list?.data);
  useEffect(() => {
    if (id) {
      const idDe = Paramcrypt.decode(id);
      // dispatch(fetchCostumerDetail({ voucher_id: idDe }));
      costumerList?.map((item) => (item.id === idDe ? setCostumer(item) : null));
    }
  }, [id]);
  useEffect(() => {
    console.log(costumer);
  }, [costumer]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 px-9 my-16">
        <center>
          <img src={resolveImage(costumer?.picture)} alt="thumbnail" className="h-80 w-auto bg-cover rounded-lg" />
        </center>
        <div className="flex flex-col gap-2 text-white">
          <h6 className="m-0 title font-semibold text-xl capitalize">{costumer?.title}</h6>
          <p className="m-0 text-sm font-normal">
            {costumer?.description}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <input type="text" className="bg-white border-2 border-gray-400 shadow-inner py-2 font-semibold w-96 text-base rounded-md px-2" value={costumer?.kode_outlet} disabled />
          <button type="button" className="bg-[#3D9705] shadow-inner text-white px-4 rounded-md w-36">Copy</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
