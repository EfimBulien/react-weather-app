import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import CityList from './components/CityList';

const App = () => {
    const [selectedCity, setSelectedCity] = useState('Moscow');

    return (
        <div className="container">
            <CurrentWeather city={selectedCity}/>
            <CityList onSelectCity={setSelectedCity}/>
            <WeatherForecast city={selectedCity}/>
        </div>
    );
};

export default App;
