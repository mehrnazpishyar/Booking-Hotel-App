import { useState } from "react";

const useGeoLocation = () => {
  const [isLoading, setIsloading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not geoLocation");
    setIsloading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.latitude,
          lng: pos.longitude,
        });
        setIsloading(false);
      },
      (error) => {
        setError(error.message);
        setIsloading(false);
      }
    );
  }
  return {isLoading, error, position, getPosition}
};

export default useGeoLocation;
