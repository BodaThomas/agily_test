import React, {useState} from 'react';
import {Input} from '../components'
import searchIcon from '../assets/searchIcon.svg'

const HomepageView = ({city, setCity}) => {
    const [inputValue, setInputValue] = useState(city);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(inputValue);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="website-title">The Forecast<br/>Weather App</h1>
                <Input placeholder="Search" icon={searchIcon} onIconClick={handleSubmit} onChange={handleChange} value={inputValue} />
            </header>
        </div>
    )
}

export default HomepageView;
