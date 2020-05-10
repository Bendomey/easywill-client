import React, { useEffect, useState } from "react";

const usePosition = (props) => {
  const [position, setPosition] = useState();
  useEffect(() => {
    const geo = navigator.geolocation;
    let data;
    if (!geo) {
      return new Error("Geolocation is not supported");
    }

    geo.getCurrentPosition(
      ({ coords }) => {
        // console.log(coords)
        setPosition(coords);
        // data = coords;
        // return coords
      },
      (error) => {
        return new Error(error.message);
      }
    );
    console.log(data);
  });

  return {position };
};

export default usePosition;
