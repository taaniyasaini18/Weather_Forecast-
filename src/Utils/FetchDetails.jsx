export const placesdetected = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_Key_Rapid_api,
      'X-RapidAPI-Host': 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places'
    }
  };

 
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  