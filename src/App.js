import React, { useState } from 'react';
import ZipCodeForm from './ZipCodeForm';
import LocationInfo from './LocationInfo';
import './index.css'


function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  const handleLocationInfoChange = (data) => {
    setLocationInfo(data);
  };

  const clearLocationInfo = () => {
    setLocationInfo(null);
    
  };
  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onLocationInfoChange={handleLocationInfoChange}  /> {/* Pass the function as a prop */}
      <LocationInfo locationInfo={locationInfo} clearLocationInfo={clearLocationInfo}/>
    </div>
  );
}

export default App;
