import { useState, useEffect } from "react";

function Weather(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [exclude, setExclude] = useState('daily');
  const [items, setItems] = useState([]);
  const type = props.type || 0; // 0 current 1 week
  const modes = {0: 'daily', 1: 'current'}
  const mode = modes[type]
  useEffect(() => {
    setExclude(mode)
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,${mode}}&appid=${process.env.REACT_APP_API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [mode])

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

export default Weather