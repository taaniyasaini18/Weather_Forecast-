import React , {useState, useEffect} from 'react';
import './Enteringpage.css'; // Import the CSS file separately
import Front_Image from '../assets/Front_Image.jpg'
import {fetchData,placesdetected} from './../Utils/FetchDetails.jsx'
import Detailed_page from './Detailed_page';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Entering_page = () => {

    const [inputValue, setInputValue] = useState('');
    const [places, setPlaces] = useState({});
    const [selectedPlace, setSelectedPlace] = useState('');
    const navigate = useNavigate()

    // Function to fetch places from API
    const fetchPlaces = async (place) => {
        try {
            const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${place}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ed77bf7367msh874e77d941ebdd3p15d1c4jsna78a860c1a74',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch places');
            }
            const data = await response.json();
            console.log('Response data:', data); // Log response data for debugging
            console.log(typeof(data))
            console.log('Response data name:', data.name)
            setPlaces(data.name); 
            
            const response2 = await fetch(`https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${data.coord.lat}/${data.coord.lon}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
                    'X-RapidAPI-Key': '53629ac668msh9c5fa0b8740e7f3p151fd1jsn05e8b1604eae',
                }
            });

            const threehourdata = await response2.json();
            console.log('Response data:', data.wind.deg ); // Log response data for debugging
           
            

             // Accessing the name property
            // Set places to the name
          
             

            navigate('./Detailed_page', { state: { places: data.name  , weather: data.weather , threehourdata: threehourdata , windy: data.wind.deg , humidity : data.main.humidity , pressure : data.main.pressure} });
        } catch (error) {
            console.error('Error fetching places:', error);
        }
    };

   

    // Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle place selection
    const handlePlaceSelect = () => {
        if (inputValue.trim().length > 0) {
            
            fetchPlaces(inputValue);
           
        }
    };

    // Render the list of places
   /*  const renderPlaces = () => {
        return (
            <ul>
                {places.map((place, index) => (
                    <li key={index}>{place}</li>
                ))}
            </ul>
        );
    };*/
    // Filter places based on input value
    //const filteredPlaces = places.filter(place => place.toLowerCase().includes(inputValue.toLowerCase()));

    
  return (
    <div className="Page-1_Background">
      
      <div class="cross"></div>
      <div className="box1">
      <button className="btn btn-danger">Live</button>
      </div>


      <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} style={{ position: 'absolute', top:'178px', left: '0px' }} />
      <input    
                className="Textbox"
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter a place" 
                //style={{ width: '300px', height: '50px' }}
            />
       <button type="button" class="btn btn-primary" className='searchbutton' onClick={handlePlaceSelect}>search</button>   
      

      <h1> {places.name} </h1>
    </div>
  );
};

export default Entering_page;