import { useEffect, useState } from "react";
import SelectedCity from "./SelectedCity";
import Tabs from "./Tabs";
function CityList(props) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({ city: '', state: '', country: '' })
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

    console.log(props.items)

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
            country: country
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
            <Tabs></Tabs>
            <SelectedCity selected={selected} />
        </div>
    );
}
export default CityList;