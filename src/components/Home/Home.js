import React from 'react';
import Grid from '@material-ui/core/Grid';

import DateList from '../DateList';
import GameList from '../GameList';
//import Navigation from '../Navigation';

import './Home.scss';

const Home = (props) => {
  return (
    <Grid container justify="space-around">
      <Grid container item xs={12} md={11} direction="column" className="grow-1">
        {/*<Grid item>
          <Navigation />
        </Grid>*/}
        <Grid item>
          <DateList />
        </Grid>
        <Grid item className="home-content grow-1">
          <div style={{ padding: ".5em .5em 0" }}>Mon November 12</div>
          <GameList />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;