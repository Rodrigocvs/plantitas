import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div >
      <header >
        <NavBar/>
      </header>
      <body>
        <Saludo persona={'Nicolas'}/>
      </body>
    </div>
  );
}

export default App;
