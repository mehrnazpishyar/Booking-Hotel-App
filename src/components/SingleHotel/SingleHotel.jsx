import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useHotels } from "../context/HotelsProvider";
import Loader from "../Loader/Loader";

const SingleHotel = () => {
  const { id } = useParams();
  const {getHotel,isLoadingCurrHotel , currentHotel}=useHotels()

useEffect(()=>{
getHotel(id)
},[id])

if (isLoadingCurrHotel) return <Loader/>  

  return (
    <div>single</div>
    // <div className="room">
    //   <div className="roomDetail">
    //     <h2>{data.name}</h2>
    //     <div>
    //       {data.number_of_reviews} reviews &bull; {data.smart_location}
    //     </div>
    //     <img src={data.xl_picture_url} alt={data.name} />
    //   </div>
    // </div>
  );
};

export default SingleHotel;
