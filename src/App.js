import React, { useState } from 'react';
import './App.css';
import MapComponent from './Components/MapComponent/MapComponent';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([
    {
      Applicant: 'Mock Food Truck 1',
      FoodItems: 'Burgers, Fries, Drinks',
      Latitude: 37.7839,
      Longitude: -122.4081,
    },
    {
      Applicant: 'Mock Food Truck 2',
      FoodItems: 'Tacos, Burritos, Quesadillas',
      Latitude: 37.7694,
      Longitude: -122.4154,
    },
    {
      Applicant: 'Mock Food Truck 3',
      FoodItems: 'Sandwiches, Salads, Soups',
      Latitude: 37.7741,
      Longitude: -122.4377,
    },
  ]);

  return (
    <div className="App">
      <MapComponent foodTrucks={foodTrucks} />
    </div>
  );
}

export default App;
