import { useEffect, useState } from "react";
import Tabs from "./Tabs";
function SelectCity(props) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({ city: '', state: '', country: '', lat: 33.44, lon: -94.04 })
    const data = props.items
    let cities = [];
    let listItems = [];
    for (var i in data) {
        let city = {
            key: i,
            value: data[i].name + ", " + data[i].state + ", " + data[i].country
        }
        cities.push(city)
    }

    useEffect(() => {
        setOpen(false)
    }, [props])


    function handleClick(index, e) {
        e.preventDefault();
        let countryName = new Intl.DisplayNames(['en'], { type: 'region' });
        let country = countryName.of(data[index].country);  // "United States"
        let city = {
            city: data[index].name,
            state: data[index].state || "",
            country: country,
            lat: data[index].lat,
            lon:data[index].lon
        }
        setSelected(city)
        // take lat long
        setOpen(true)
    }

    if (!open) {
        listItems = cities.map((x) =>
            <li className="autocomplete-item" onClick={(e) => handleClick(x.key, e)} key={x.key}>{x.value}</li>
        );
    }

    return (
        <div>
            <ul className="autocomplete">
                {listItems}
            </ul>
            <Tabs selected={selected}></Tabs>
        </div>
    );
}
export default SelectCity;