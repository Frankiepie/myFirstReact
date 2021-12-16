import logo from '../logo.svg';
import '../App.css';

import Button from './Button';
import helloServices from '../services/helloServices';
import Employee from './Employee';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img className="App-logo" src="https://data.whicdn.com/images/129264456/original.gif"  alt="logo" />
        <p>
          Lonely Toons
        </p>
           <Button/>
      </header>
    </div>
  );
}

export default Home;
