import { useState, useEffect } from 'react';
import SoloCard from './SoloCard';
import Card from './Card';
import env from '../assets/api-key.json'
function Tableau(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [exclude, setExclude] = useState('');
  const [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.selected.lat}&lon=${props.selected.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${env.REACT_APP_API_KEY}`);
  const [items, setItems] = useState({weather: {main:"Clear", icon: "10d"}, temp: "20.0"});

  useEffect(() => {
    const modes = { 1: 'daily', 0: 'current' }
    setExclude(modes[props.type])
  }, [props])

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.selected.lat}&lon=${props.selected.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${env.REACT_APP_API_KEY}`)
  }, [props])


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result = result[exclude]
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [url, exclude])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    if (exclude === 'current') {
      return (
        <SoloCard items={items} />
      )
    }
    else if (exclude === 'daily') {
      return (
        <Card items={items} />
      )
    }
    else {
      return (
        <div>{JSON.stringify(items)}</div>
      );
    }

  }
}

export default Tableau;  