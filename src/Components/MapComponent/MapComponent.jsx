import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './MapComponent.css';

const MapComponent = ({ foodTrucks }) => {
  const defaultPosition = [37.7749, -122.4194];
  const zoom = 13;

  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [24, 40],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={defaultPosition}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {foodTrucks.map((truck, index) => (
          <Marker
            key={index}
            position={[truck.Latitude, truck.Longitude]}
            icon={defaultIcon}
          >
            <Popup>
              <strong>{truck.Applicant}</strong>
              <br />
              {truck.FoodItems}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
