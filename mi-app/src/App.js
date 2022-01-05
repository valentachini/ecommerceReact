//import logo from '../src/logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarCss from './components/navBar/NavbarCss';


/*function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;*/

const App = () => {
  
  const greeting = 'Hola mundo'

  return(
    <div className='hooks-app'>      
      <NavbarCss/>
      <ItemListContainer greeting={greeting} />   
  
    </div>
  )
}

export default App
