import Tableau from "./Tableau";
import SelectedCity from "./SelectedCity";
import {useState} from "react"
function Tabs(props){
    const [ active, setActive ] = useState(0);
    const openTab = (e) => {
        setActive(e.target.id)
        e.preventDefault()
    }
    return(
        <div>
            <button id="0" className="toggle-button" onClick={openTab}>CURRENT</button>
            <button id="1" className="toggle-button" onClick={openTab}>7 DAY FORECAST</button>
            <SelectedCity selected={props.selected} />
            <Tableau type={active} selected={props.selected} />
        </div>
    );
}
export default Tabs;