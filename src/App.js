import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MapComponent from './Components/MapComponent/MapComponent';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://data.sfgov.org/resource/rqzj-sfat.json?$select=Latitude,Longitude,Applicant,FoodItems&$where=Status='APPROVED' AND ExpirationDate > '2023-05-19'"
      );
      const validFoodTrucks = response.data.filter(
        truck =>
          truck.Latitude !== undefined &&
          truck.Longitude !== undefined &&
          truck.Applicant !== undefined &&
          truck.FoodItems !== undefined
      );

      setFoodTrucks(validFoodTrucks);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <MapComponent foodTrucks={foodTrucks} />
    </div>
  );
}

export default App;
