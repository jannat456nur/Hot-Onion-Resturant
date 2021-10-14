
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './pages/Breakfast/Breakfast';
import Dinner from './pages/Dinner/Dinner';
import Banner from './pages/Home/Banner/Banner';
import Changes from './pages/Home/Changes/Changes';
import Extra from './pages/Home/Extra/Extra';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Homme from './pages/Homme/Homme';
import Login from './pages/Login/Login';
import Lunch from './pages/Lunch/Lunch';


function App() {
  return (
    <div className="App">












      {/* <Lunch></Lunch> */}
      <BrowserRouter>








        <Breakfast></Breakfast>


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
          {/* <Route path="/dinner">
            <Dinner></Dinner>
          </Route> */}
        </Switch>

      </BrowserRouter>
      {/* <Breakfast></Breakfast> */}
      {/* <Extra></Extra>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
