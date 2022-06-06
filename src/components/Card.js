import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import Weather from '../services/fetchWeather'

function Card(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [exclude, setExclude] = useState('');
    const [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,daily&appid=${process.env.REACT_APP_API_KEY}`);
    const [items, setItems] = useState([]);
    const modes = {0: 'daily', 1: 'current'}
    const mode = modes[props.type]
    useEffect(() => {
      setExclude(modes[props.type])
      setUrl(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,${exclude}&appid=${process.env.REACT_APP_API_KEY}`)
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(url)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [props])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>{JSON.stringify(items)}</div>
      );
    }
}

export default Card;  