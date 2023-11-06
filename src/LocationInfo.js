import React from 'react';

function LocationInfo({ locationInfo,clearLocationInfo  }) {
  return (
    <div>
      
      {locationInfo ? (
        <div className='Location-info'>
            <h2>Location Information</h2>
          <p>Country: {locationInfo.country}</p>
          <p>State: {locationInfo.places[0] ? locationInfo.places[0].state : ''}</p>
          <h3 style={{textAlign:"left"}} >Places:</h3>
          <ul>
          <li style={{textAlign:"left" ,fontWeight:"bold"}}>Place Name:</li>
            {locationInfo.places.map((place, index) => (
              
              <li key={index}>
                <p> {place['place name']}</p>
              </li>
            ))}
          </ul>
          <button onClick={clearLocationInfo}>Clear</button>
        </div>
      ) : (null
      )}
           

    </div>
  );
}

export default LocationInfo;
