import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const libraries = ["places"];

const MapsMarker = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const location = useMemo(() => ({ lat: 36.34519, lng: -94.20675 }), []);
  const [selected, setSelected] = useState(location);
  const mapContainer = "w-full h-screen";

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-[300px]">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="w-full p-2"
            placeholder="Search an address"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>

      <GoogleMap
        zoom={10}
        center={selected}
        mapContainerClassName={mapContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
};

export default MapsMarker;
