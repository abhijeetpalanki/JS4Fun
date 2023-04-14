import { useState, useRef } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 36.345188, lng: -94.206749 };
const libraries = ["places"];

const MapsMarker = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) return <div>Loading...</div>;

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  return (
    <div className="relative flex flex-col items-start justify-center w-screen h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div className="absolute top-0 z-10 p-4 m-4 bg-white rounded-lg shadow w-60 md:w-96">
        <div className="flex flex-col items-center justify-center">
          <Autocomplete>
            <input
              className="w-[200px] md:w-[350px] p-2 m-2 border border-gray-500 rounded outline-none"
              type="text"
              placeholder="Origin"
              ref={originRef}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              className="w-[200px] md:w-[350px] p-2 m-2 border border-gray-500 rounded outline-none"
              type="text"
              placeholder="Destination"
              ref={destinationRef}
            />
          </Autocomplete>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="p-2 text-white bg-black rounded"
            type="submit"
            onClick={calculateRoute}
          >
            Calculate Route
          </button>
          <button
            className="p-2 text-white bg-gray-500 rounded"
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          >
            <FaLocationArrow />
          </button>
          <button
            className="p-2 text-white bg-gray-500 rounded"
            onClick={clearRoute}
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 border-t border-t-gray-500">
          <p className="text-xl font-bold uppercase">Distance: {distance} </p>
          <p className="text-xl font-bold uppercase">Duration: {duration} </p>
        </div>
      </div>
    </div>
  );
};

export default MapsMarker;
