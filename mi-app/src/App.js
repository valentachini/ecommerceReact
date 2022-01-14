import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail';
import NavbarCss from './components/navBar/NavbarCss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
      <BrowserRouter> 
      <NavbarCss/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={greeting} />}/>
        <Route path='/category/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
         
      </Routes> 
      </BrowserRouter>
  
    </div>
  )
}

export default App

