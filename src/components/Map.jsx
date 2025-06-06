'use client';
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Routing({ sourceCoords, destinationCoords }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !sourceCoords || !destinationCoords) return;

    let control;

    const loadRouting = async () => {
      const routing = await import('leaflet-routing-machine');
      control = L.Routing.control({
        waypoints: [
          L.latLng(sourceCoords[0], sourceCoords[1]),
          L.latLng(destinationCoords[0], destinationCoords[1])
        ],
        routeWhileDragging: false,
        showAlternatives: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }]
        },
        createMarker: (i, waypoint) => {
          return L.marker(waypoint.latLng, {
            icon: L.icon({
              iconUrl: markerIcon,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })
          });
        }
      }).addTo(map);

      control.on('routesfound', function (e) {
        const summary = e.routes[0].summary;
        console.log(`Distance: ${(summary.totalDistance / 1000).toFixed(2)} km`);
        console.log(`Time: ${(summary.totalTime / 60).toFixed(2)} minutes`);
      });
    };

    loadRouting();

    return () => {
      if (control) {
        map.removeControl(control);
      }
    };
  }, [map, sourceCoords, destinationCoords]);

  return null;
}

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, []);
  return null;
}

async function getCoordinates(city) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${city}, Pakistan`
  );
  const data = await response.json();
  if (data.length > 0) {
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  }
  return null;
}

function MapUpdater({ source, destination, setCoords }) {
  const map = useMap();

  useEffect(() => {
    const fetchCoords = async () => {
      if (source && destination) {
        const sourceCoords = await getCoordinates(source);
        const destCoords = await getCoordinates(destination);

        if (sourceCoords && destCoords) {
          map.setView(sourceCoords, 6);
          setCoords({ source: sourceCoords, destination: destCoords });
        }
      }
    };
    fetchCoords();
  }, [source, destination]);

  return null;
}

export default function Map({ source, destination, coords, setCoords }) {
  return (
    <MapContainer center={[30.3753, 69.3451]} zoom={5} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ResizeMap />
      <Routing sourceCoords={coords.source} destinationCoords={coords.destination} />
      <MapUpdater source={source} destination={destination} setCoords={setCoords} />
      {coords.source && <Marker position={coords.source} />}
      {coords.destination && <Marker position={coords.destination} />}
    </MapContainer>
  );
}
