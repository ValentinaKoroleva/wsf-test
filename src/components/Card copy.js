import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import Weather from '../services/fetchWeather'

function Card(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [exclude, setExclude] = useState('');
    const [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.selected.lat}&lon=${props.selected.lon}&exclude=hourly,minutely,alerts,daily&appid=${process.env.REACT_APP_API_KEY}`);
    const [items, setItems] = useState([]);
    const modes = {0: 'daily', 1: 'current'}

    useEffect(() => {
      setExclude(modes[props.type])
      setUrl(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.selected.lat}&lon=${props.selected.lon}&exclude=hourly,minutely,alerts,${exclude}&appid=${process.env.REACT_APP_API_KEY}`)
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [props])


    useEffect(() => {
        setExclude(modes[props.type])
        setUrl(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.selected.lat}&lon=${props.selected.lon}&exclude=hourly,minutely,alerts,${exclude}&appid=${process.env.REACT_APP_API_KEY}`)
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [url])
  
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