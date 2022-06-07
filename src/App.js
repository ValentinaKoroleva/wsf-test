import './App.css';
import Search from './components/Search';
import 'font-awesome/css/font-awesome.min.css';

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,current&appid=${process.env.REACT_APP_API_KEY}`
function App() {
  return (
    <div className="App">
      <Search></Search>
    </div>
  );
}

export default App;
