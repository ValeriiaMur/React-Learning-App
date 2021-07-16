import React from "react";
import img from '../assets/start.jpeg';
import { BrowserRouter as Link} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import './startcourse.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StartCourse = () => {
  const classes = useStyles();
  return (
    <div className = "course">
      <img src={img} alt="" id = "courseImg"></img>
      <div className = "column">
        <h1>FileMaker Mastery Course</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 1</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 2</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 3</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 4</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 5</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 6</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 7</Link></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Link to="/lesson">Lesson 8</Link></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StartCourse;