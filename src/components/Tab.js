import Weather from '../services/fetchWeather'

function Tab(props) {
    return (
        <div>
        <h1>Привет, {props.name}</h1>
        <Weather url={props.url}></Weather>
        </div>
    );
}

export default Tab;  