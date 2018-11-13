import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Basketball } from 'mdi-material-ui';
import Home from '../Home';
import Game from '../Game';
import Player from '../Player';

const App = (props) => {
  return (
    <Grid container className="App full-height" direction="column">
      <CssBaseline />
      <Grid container item className="app-header" alignItems="center" justify="center">
        <Grid item><Basketball style={{ marginRight: ".25em" }} /></Grid><Grid item><span style={{ fontWeight: "bold" }}>Basketball Stats</span></Grid>
      </Grid>
      <Grid container item className="grow-1">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Game/:gameid' component={Game} />
          <Route path='/Player/:playerid' component={Player} />
          <Route render={() => {return <h1>This page doesn't exist.</h1>;}} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default App;