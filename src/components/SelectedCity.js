function SelectedCity(props){
    return (
        <div>
            <p className="city-text">{props.selected.city}</p>
            {/* <p>{props.selected.state}</p> */}
            <p className="country-text">{props.selected.country}</p>
        </div>
        )
}
export default SelectedCity;