import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import "../styles/map.css";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBjcpgA6P733SBM8RAAsgxZJlVb6rZ0_2U",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: 40.74781943188186, lng: -73.99332455826745 }}
      mapContainerClassName="map-container"
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <MarkerF
        position={{ lat: 40.748160809395095, lng: -73.99297050670941 }}
      />
      <MarkerF position={{ lat: 40.74781943188186, lng: -73.99332455826745 }} />
    </GoogleMap>
  );
}
