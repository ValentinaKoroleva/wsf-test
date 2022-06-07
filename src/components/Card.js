
function Card(props) {
    let listCards = []
    if (props.items.length === 8) {
        for (var i = 1; i < 8; i++) {
            const item = props.items[i]
            const iconSrc = new URL("http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png")
            const avgTemp = (item.temp.max + item.temp.min)/2
            const temp = Math.round(avgTemp * 10)/10 + "℃"
            const main = item.weather[0].main;
            const timestamp = item.dt;
            const date = new Date(timestamp * 1000);
            const dateFormatted = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
            listCards.push(
                <div className="cards" key={i}>
                    <img src={iconSrc} alt="icon-weather" />
                    <p>Avg Temp:</p>
                    <p>{temp}</p>
                    <p>{main}</p>
                    <p>{dateFormatted}</p>
                </div>
            )
        }
    }



    if (typeof props.items != "undefined" && props.items.length === 8) {
        return (
            <div className="cards-week">
                {listCards}
            </div>
        );
    }
    else {
        return (<div>
        </div>)
    }
}


export default Card;  