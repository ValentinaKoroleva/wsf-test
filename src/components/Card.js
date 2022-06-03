import Weather from '../services/fetchWeather'

function Card(props) {
    return (
        <Weather url={props.url}></Weather>
    );
}

export default Card;  