import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div >
      <header >
        <NavBar/>
      </header>
        <ItemListContainer greeting={'Nicolas'}/>
    </div>
  );
}

export default App;
