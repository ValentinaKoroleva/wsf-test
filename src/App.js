import './App.css';

function App() {
  return (
    <div className="App">
      {/* delete header but when I am done with css */}
      <header className="App-header">
      </header>
      {/* approximate scheme */}
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
