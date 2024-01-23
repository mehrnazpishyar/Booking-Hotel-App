import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from '../Loader/Loader'

const LocationList = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://booking-hotel-app.onrender.com/hotels"
  const query = ""
  
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (err) {
        setData([]);
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query, url]);

  

  if (isLoading) return <Loader />;

  return (
    <div className="nearbyLocations">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          return (
            <div className="locationItem" key={item.id}>
              <img src={item.picture_url.url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">€&nbsp;{item.price}&nbsp; <span>night</span> </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;
