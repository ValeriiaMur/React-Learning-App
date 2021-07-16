import React from "react";
import img from '../assets/home.jpeg';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";

//style
import './home.css';
import { Button } from '@material-ui/core';

import StartCourse from "./StartCourse.js"

const Home = () => {
  return (
    <div className = "home">
      <div id = "title">
        <h1>FileMaker Lab </h1>
        <h3>Learn by doing</h3>
        <Button variant="contained" color="default">
          <Link to="/start-course">Start</Link>
        </Button>
      </div>
      <div id = "homeImg">
        <img src={img} alt="" id="hi"></img>
      </div>
      <Switch>
        <Route path="/start-course" component={StartCourse} />
      </Switch>
    </div>
  );
};

export default Home;