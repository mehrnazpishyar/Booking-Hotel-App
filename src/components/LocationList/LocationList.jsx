import { useState } from "react";
import { hotels } from "../../data/data";

import Loader from "../Loader/Loader";

const LocationList = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Loader />;

  return (
    <div className="nearbyLocations">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {hotels.map((item) => {
          return (
            <div className="locationItem" key={item.id}>
              <img src={item.xl_picture_url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  €&nbsp;{item.price}&nbsp; <span>night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;
