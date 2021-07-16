import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import '@fontsource/roboto';

//components
import Home from "/Users/valeriiamuradian/Desktop/fm-lab/src/components/Home.js"
import StartCourse from "/Users/valeriiamuradian/Desktop/fm-lab/src/components/StartCourse.js"

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h3> Logo</h3>
        {/* <p>The best pizza in town!</p> */}
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">contact us</Link>
        </li>
        <li>
          <Link to="/start-course">go to course</Link>
        </li>
      </nav>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/start-course" component={StartCourse} />
      </Switch>
      </div>
      <nav className = "footer">
        <p>Copyright 2022</p>
      </nav>
    </Router>
  );
}

export default App;
