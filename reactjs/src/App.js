import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import TabelMahasiswa from './pages/ListMahasiswa';
import Mahasiswa from './pages/Mahasiswa';
import ProductPage from './pages/Product';


function App() {
  return (

<Router forceRefresh={true}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/daftarmahasiswa">
            <TabelMahasiswa />
          </Route>
          <Route path="/mahasiswa">
            <Mahasiswa />
          </Route>
          <Route path="/product/:productId" component={ProductPage} />
        </Switch>
    </Router>
  );
}

export default App;
