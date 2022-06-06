import Card from "./Card";
import SelectedCity from "./SelectedCity";
import {useState} from "react"
function Tabs(props){
    const [ active, setActive ] = useState(0);
    let type = 0;
    const openTab = (e) => {
        setActive(e.target.id)
        e.preventDefault()
        type = e.target.id
    }
    return(
        <div>
            <button id="0" className="toggle-button" onClick={openTab}>CURRENT</button>
            <button id="1" className="toggle-button" onClick={openTab}>7 DAY FORECAST</button>
            <SelectedCity selected={props.selected} />
            <Card type={active} />
        </div>
    );
}
export default Tabs;