
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './pages/Breakfast/Breakfast';
import Dinner from './pages/Dinner/Dinner';
import Error from './pages/Error/Error';
import Banner from './pages/Home/Banner/Banner';
import Changes from './pages/Home/Changes/Changes';
import Extra from './pages/Home/Extra/Extra';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Homme from './pages/Homme/Homme';
import Login from './pages/Login/Login';
import Lunch from './pages/Lunch/Lunch';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App">












      {/* <Lunch></Lunch> */}
      <BrowserRouter>











        {/* <Header></Header>
        <Banner></Banner>
        <Changes></Changes> */}
        <Switch>
          <Route exact path="/">

            <Homme></Homme>

          </Route>
          <Route exact path="/home">

            <Homme></Homme>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
