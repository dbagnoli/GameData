import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import valorantlogo from '../assets/valorantlogo.png';
import tftlogo from '../assets/tftlogo.png';

import { Link } from 'react-router-dom';

import loadDB from '../components/loadDB';
import WriteValorantData from '../components/writeData';

function Home() {
  //const firebaseApp = firebase.apps[0];
  return (
    <div>
      <p>GameData</p>
      <List component='nav'>
        <Link to='/valorant'>
          <ListItem button>
            <img src={valorantlogo} alt='valorantlogo' />
          </ListItem>
        </Link>
        <ListItem button>
          <img src={tftlogo} alt='tftlogo' />
        </ListItem>
        <ListItem
          button
          onClick={(event) =>
            WriteValorantData('jett', 'one', 'classic', 'win')
          }
        >
          <ListItemText primary='Test Increment Valorant Data' />
        </ListItem>
        <ListItem button onClick={(event) => loadDB()}>
          <ListItemText primary='Reset Database to 0' />
        </ListItem>
      </List>
    </div>
  );
}

export default Home;
