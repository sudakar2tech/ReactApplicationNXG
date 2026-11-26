import logo from './logo.svg';
import './App.css';
import Classcomponent from './Classcomponent';

function App() {
  return (
    <div className="App">
      <h1>Function Component</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Mark />
      <Classcomponent />
    </div>
  );
}
function Mark()
{
  return(
    <div>
      <h1>Score: 100</h1>
    </div>
  );
}

export default App;
