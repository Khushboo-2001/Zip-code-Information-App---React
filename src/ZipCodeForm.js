import React, { useState } from 'react';

function ZipCodeForm({ onLocationInfoChange}) {
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   

     // Clear previous data and error message
     onLocationInfoChange(null);
     setError(null);
    
    
    try {
        console.log('Before fetching data');
        const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
      
        console.log('Data successfully fetched');
      
        const data = await response.json();
      
        onLocationInfoChange(data);
        setError(null);
      } catch (error) {
        console.log('Error: ', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
  };

  return (
    <div  >
      <form onSubmit={handleSubmit}  className='forms-content'>
        <label  className='lable-code'>
          Enter Postal Code:
          <input
          className='input-style'
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading} >
          {loading ? 'Fetching...' : 'Submit'}
        </button>
             

      </form>
      {loading && <p className='error'>Loading...</p> }
      {error && <p className='error'> {error}</p>}

    </div>
  );
}

export default ZipCodeForm;
