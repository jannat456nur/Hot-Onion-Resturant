
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './pages/Breakfast/Breakfast';
import Banner from './pages/Home/Banner/Banner';
import Extra from './pages/Home/Extra/Extra';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Link from './pages/Link/Link';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <BrowserRouter>

        <Switch>
          <Route>
            <Breakfast></Breakfast>
          </Route>
        </Switch>
      </BrowserRouter>
      <Breakfast></Breakfast>
      <Extra></Extra>
      <Footer></Footer>
    </div>
  );
}

export default App;
