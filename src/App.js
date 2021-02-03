import './App.css';
import MusicPlayer from './MusicPlayer'

function App() {
  return (
    <div className="app">
      <header className="App-header" style={{width: '1200px'}}>
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
      <div className="player">
      <h1>Listen Now!</h1>
        <MusicPlayer/>
      </div>
    </div>
  );
}

export default App;
