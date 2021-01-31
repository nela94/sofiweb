import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <div className="Nav-container">
          <div className="navbar">
            <ul className="horizontal">
              <li className="topli">
                <div className="containsNavContents">
                <a className="top" href=""> Home </a>
                </div>
              </li>
              <li className="topli">
                <div className="containsNavContents">
                <a className="top" href=""> Bio </a>
                </div>
              </li>
              <li className="topli">
                <div className="containsNavContents">
                <a className="top" href=""> Photos </a>
                </div>
              </li>
              <li className="topli">
                <div className="containsNavContents">
                <a className="top" href=""> Contact </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
