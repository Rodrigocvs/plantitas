
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetailContainer2 from './components/prueba/ItemDetailContainer2';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter> {/*envuelve a toda la app. Define el rango donde voy a usar el enrutador */}
      <div>
          <NavBar/>
          <Switch> {/* componentes con rutas propias */}
            <Route exact path='/'>
              <ItemListContainer greeting={'Nicolas'}/>
            </Route>
            <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
            <Route component={ItemDetailContainer} exact path='/detalle/:idPlanta'/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
