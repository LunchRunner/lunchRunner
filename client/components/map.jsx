import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from "@react-google-maps/api";
import "../styles/map.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/map.css"

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBjcpgA6P733SBM8RAAsgxZJlVb6rZ0_2U",
  });


  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const posts = useSelector((state) => state.post.posts);

  function renderMarkers(posts) {

    return posts.map(post => {
      function createDate(date) {
        const newDate = new Date(date)
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = monthNames[newDate.getMonth()]
        const day = newDate.getDate()
        const displayTime = newDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        return `${month} ${day} at ${displayTime}`
      }

     if (post.latitude) {
       return <MarkerF
       position={{ lat: Number(post.latitude), lng: Number(post.longitude) }}
       onClick={() => {
        setSelectedCenter(post)
        console.log(post)
      }}
     >
      ({selectedCenter  == post ? (
            <InfoWindow onCloseClick={() => setSelectedCenter(null)}>
              <div className="mapBox">
                <h4>{post.placeId}</h4>
                <p>{createDate(post.expirationTime)}</p>
                <p>Organized by <span>{post.owner}</span></p>
                {post.runners.map((runner) => {
                  return <p>{runner}</p>
                })}
              </div>
            </InfoWindow>
          ) : null})
      </MarkerF>
     }
    })
   }

  
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
    {renderMarkers(posts)}

    </GoogleMap>
  );
}
