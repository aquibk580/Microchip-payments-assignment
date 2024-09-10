import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MapPinOff, Search } from "lucide-react";

const containerStyle = {
  width: "400px",
  height: "400px",
  borderRadius: "20px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [isActive, setIsActive] = useState(false);

  return isLoaded ? (
    isActive ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    ) : (
      <div className="flex flex-col items-center space-y-4 shadow-lg border rounded-lg px-4 sm:px-0 py-10">
        <MapPinOff size={50} className="text-red-600" />
        <h1 className="text-xl font-semibold">Location Permission is Off</h1>
        <p className="text-sm sm:w-[380px] text-center px-4">
          We need your location to find the nearest store & provide you a
          seamless delivery experience
        </p>
        <button
          className="text-white bg-red-600 font-bold px-20 py-2 rounded-lg"
          onClick={() => {
            setIsActive(true);
          }}
        >
          Enable Location
        </button>
        <button className="flex flex-row justify-center items-center text-red-600 font-semibold border-gray-400 border px-[26px]  py-[2px] bg-white rounded-lg text-[14px]">
          <Search size={35}  className="px-2"/>
          Search your location manually
        </button>
      </div>
    )
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
