import './App.css';
import Tab from './components/Tab';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${process.env.REACT_APP_API_KEY}`

function App() {
  return (
    <div className="App">
      {/* delete header but when I am done with css */}
      <header className="App-header">
      </header>
      {/* approximate scheme */}
      <Tab name="Valya" url={url}></Tab>
      <search></search>
      <tabs>
        <tab class="current">
          <city></city>
          <country></country>
          <solo-card></solo-card>
        </tab>
        <tab class="7d">
          <city></city>
          <country></country>
          {/* seven cards */}
          <card></card>
        </tab>
      </tabs>
    </div>
  );
}

export default App;
