import "./App.css";

import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FormControl,MenuItem,Select } from "@material-ui/core";
import Map from "./Map"
import Analytics from "./Table"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2 style={{ textAlign: 'center' }}>This is the Home page</h2><br /><br />
        <h2 style={{ textAlign: 'center' }}>LiveFeed Guide</h2>
        <p style={{ textAlign: 'center' }}>LiveFeed page contains the posts sent by the server.<br />
        On the top, there 8 checkboxs. If the checkbox is unclicked, the coorsponding posts will be filtered out</p><br /><br />
        <h2 style={{ textAlign: 'center' }}>Analytics Guide</h2>
        <p style={{ textAlign: 'center' }}>Analytics page counts the number of posts based on their problems and priorities<br/>
        This page is just for viewing information, there should be no operation availiable</p>
      </div>
    );
  }
};


export default function App() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
    <Router>
    <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-Tracker
          </Typography>
          <Button color="inherit" component = {Link} exact to="/home">Home</Button>
          <Button color="inherit" component = {Link} exact to="/map">Map</Button>
          <Button color="inherit" component = {Link} exact to="/analytics">Analytics</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
        <Route path="/home" component={Home} />
          <Route path="/map" component = {Map}/>
          <Route path="/analytics" component = {Analytics} />
      </Router>
    </div>
      <div className = "table"></div>
</div>
  );
}