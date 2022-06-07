
function SoloCard(props) {
    if (typeof props.items != "undefined" && props.items.length !== 8) {
        let iconSrc = new URL("http://openweathermap.org/img/wn/" + props.items.weather[0].icon + "@2x.png")
        let temp = Math.round(props.items.temp * 10)/10 + "℃"
        let main = props.items.weather[0].main
        return (
            <div>
                <img src={iconSrc} alt="icon-weather"/>
                <p>{temp}</p>
                <p>{main}</p>
            </div>
        );
    }
    //  else if (typeof props.items != "undefined" && props.items.length === 8) {
    //     return (<div>test</div>)
    // }
     else {
        return (<div></div>)
    }

}

export default SoloCard;  