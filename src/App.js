import logo from './logo.svg';
import './App.css';
import greet from './components/greet'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    {/*creating a component*/}
      <greet/>
      




    </div>
  );
}

export default App;
