import React, { useEffect } from "react";
import { useState } from "react";
import SelectCity from "./SelectCity";
import env from '../assets/api-key.json'

function Search() {
    const [city, setCity] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [changed, setChanged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const handleChange = (event) => {
        event.persist();
        setCity((city) =>
            city = event.target.value,
        );
        setSubmitted(false)
        setChanged(true)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }
    useEffect(() => {
        if (changed && city!=='') {
            const urlCoords = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${env.REACT_APP_API_KEY}`
            fetch(urlCoords)
                .then(
                    (res) => res.json(),
                    (error) => console.log(error)
                )
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                        setSubmitted(false)
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
            setChanged(false)
        }
    }, [changed, city])

    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type="search" className="search-field" placeholder="Please enter city name" value={city} onChange={handleChange} />
                <button type="submit" className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <SelectCity items={items} />
        </div>
    );


}
export default Search