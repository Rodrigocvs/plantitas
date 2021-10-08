
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting={'Nicolas'}/>
            </Route>
            <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
            <Route component={ItemDetailContainer} exact path='/detalle/:id'/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
