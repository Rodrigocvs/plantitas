import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CardWidget from './components/CardWidget';
import CartContextProvider from './context/cartContext';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter> {/*envuelve a toda la app. Define el rango donde voy a usar el enrutador */}
        <div>
            <NavBar/>
            <Switch> {/* componentes con rutas propias */}
              <Route exact path='/'>
                <ItemListContainer greeting={'Nicolas'}/>
              </Route>
              <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
              <Route component={ItemDetailContainer} exact path='/detalle/:idPlanta'/>
              <Route component={CardWidget} exact path='/cart'/>
            </Switch>
        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
