import {Input} from './components'
import './App.css';
import searchIcon from './assets/searchIcon.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="website-title">The Forecast<br/>Weather App</h1>
        <Input placeholder="Search" icon={searchIcon} />
      </header>
    </div>
  );
}

export default App;
