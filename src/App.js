import './App.css';
import Tab from './components/Tab';
import Search from './components/Search';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,current&appid=${process.env.REACT_APP_API_KEY}`
function App() {
  return (
    <div className="App">
      {/* delete header but when I am done with css */}
      <header className="App-header">
      </header>
      <Search></Search>
      <Tab url={url}></Tab>
      {/* approximate scheme 
      <tabs>
        <tab class="current">
          <city></city>
          <country></country>
          <solo-card></solo-card>
        </tab>
        <tab class="7d">
          <city></city>
          <country></country>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
        </tab>
      </tabs>
    */}
    </div>
  );
}

export default App;
