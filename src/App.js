import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/navbar/navbar';
import Footer from './componentes/footer/footer';
import Home from './componentes/home/home';
import Contacto from './componentes/contacto/contacto';
import HarryP from './componentes/harryp/harryp';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/contacto">
            <Contacto/>
          </Route>

          <Route exact path="/harryp">
            <HarryP/>
          </Route>      
        </Switch>
      
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
