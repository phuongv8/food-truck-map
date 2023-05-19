import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import './MapComponent.css';

const MapComponent = ({ foodTrucks }) => {
  const defaultPosition = [37.7749, -122.4194];
  const zoom = 13;

  const defaultIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
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
        >
          {foodTrucks.map((truck, index) => (
            <Marker
              key={index}
              position={[truck.Latitude, truck.Longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <strong>{truck.Applicant}</strong>
              </Popup>
              <br />
              {truck.FoodItems}
            </Marker>
          ))}
        </TileLayer>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
