import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Detaisledpage.css';
import { Navbar, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Front_Image from '../assets/Front_Image.jpg';
import Additional_info from './Additional_info';

const Detailed_page = () => {
    const location = useLocation(); // Use useLocation hook to access location object
    const { places , weather, threehourdata, windy , humidity , pressure} = location.state; // Access state passed from previous component

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[currentDate.getMonth()]; // Month is zero-based
    const day = currentDate.getDate();
    const getWeatherIconUrl = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}.png`;
    };



    useEffect(() => {
        console.log('Places:', places)
        console.log('weather:', weather);
        console.log('threehourdata:', threehourdata); // Log places
    }, [places, weather]); // Add places to dependency array to log when it changes

    const kelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {/* Add more Nav.Link components for additional menu items */}
                    </Nav>
                </Navbar.Collapse>
                <Form className="search_button" inline>

                    <FontAwesomeIcon icon={faSearch} />
                </Form>
            </Navbar>


            <div className="container">
                <h1 className="BOLD_name"> {places} </h1> {/* Display places */}
                <h6 className="Dates"> {`${month} ${day},${year}`} </h6>
                <p> {weather.map((item, index) => (<p><img src={getWeatherIconUrl(item.icon)} alt="Weather Icon" /> {item.main}</p>))} </p>
               
                
                <div className="image">
                    <img src={Front_Image} alt="Image" />
                </div>

            </div>
            <div className="getBlockdata" >
                {threehourdata.list.slice(0, 6).map((item, index) => (
                        <div key={index}>
                            <p>{item.dt_txt.slice(11, 13)}</p>
                            <img src={getWeatherIconUrl(item.weather[0].icon)} alt="Weather Icon" />
                            <p>{kelvinToCelsius(item.main.temp)}</p>
                           
                        </div>
                    ))}
                </div>

                <Additional_info windy={windy} humidity={humidity} pressure={pressure}/> 

        </div>
    );
};

export default Detailed_page;
