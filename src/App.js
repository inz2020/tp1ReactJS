
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./myComponents/Counter";
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import Home from "./myComponents/Home";
import About from "./myComponents/About";
import Gallery from "./myComponents/Gallery";

function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand navbar-brand m-2">
              <ul className="navbar-nav">
             <li> <Link className="nav-link" to={"/home"}>Home</Link></li>
                  <li> <Link className="nav-link" to={"/counter"}>Counter</Link></li>
                  <li> <Link className="nav-link" to={"/about"}>About</Link></li>
                  <li> <Link className="nav-link" to={"/gallery"}>Gallery</Link></li>
              </ul>

          </nav>
          <div className="container">
              <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/counter" component={Counter}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/gallery" component={Gallery}></Route>
              </Switch>

          </div>
         {/* <div className="m-4">
              <Counter title="Profile"
                       value={1}
                       image="images/profile.jpg"/>
          </div>*/}
      </Router>
  );


}

export default App;
