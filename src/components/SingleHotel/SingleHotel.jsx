import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect, useState } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrHotel, currentHotel } = useHotels();
  const [book, setBook] = useState(false);

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrHotel || !currentHotel) return <Loader />;

  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
      </div>
      {book ? (
        <p className="booking">
         Booking was successful!
        </p>
      ) : (
        <div className="room-book">
          <button onClick={()=> setBook(true)}>Book Now</button>
        </div>
      )}

      <Link to="/hotels">
        <button className="btn back-hotel">&larr; Back</button>
      </Link>
    </div>
  );
}
export default SingleHotel;
