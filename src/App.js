import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <label>Name</label>

        <input type="text" className="rounded text-pink-500" />
      </header>
    </div>
  );
}

export default App;
