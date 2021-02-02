import React, { useEffect } from 'react';
import firebase from 'firebase';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

import breach from '../assets/breach.png';
import brim from '../assets/brim.png';
import cypher from '../assets/cypher.png';
import jett from '../assets/jett.png';
import killjoy from '../assets/killjoy.png';
import omen from '../assets/omen.png';
import phoenix from '../assets/phoenix.png';
import raze from '../assets/raze.png';
import reyna from '../assets/reyna.png';
import sage from '../assets/sage.png';
import skye from '../assets/skye.png';
import sova from '../assets/sova.png';
import viper from '../assets/viper.png';
import valorantlogo from '../assets/valorantlogo.png';

import DisplayPieChart from '../components/pieChart';
import WriteValorantData from '../components/writeData';

import { Link } from 'react-router-dom';

const characters = [
  breach,
  brim,
  cypher,
  jett,
  killjoy,
  omen,
  phoenix,
  raze,
  reyna,
  sage,
  skye,
  sova,
  viper,
];

const charStrings = [
  'breach',
  'brimstone',
  'cypher',
  'jett',
  'killjoy',
  'omen',
  'phoenix',
  'raze',
  'reyna',
  'sage',
  'skye',
  'sova',
  'viper',
];

function Valorant() {
  const [chosenChar, setChosenChar] = React.useState(null);
  const [addChar, setAddChar] = React.useState('');
  const [addRound, setAddRound] = React.useState('');
  const [addGun, setAddGun] = React.useState('');
  const [addOutcome, setAddOutcome] = React.useState('');

  const chosenCharacter = (index) => {
    if (index === null) {
      setChosenChar(null);
    } else {
      setChosenChar(charStrings[index]);
    }
    console.log(charStrings[index]);
  };

  const committoDB = () => {
    if (
      addChar === '' ||
      addRound === '' ||
      addGun === '' ||
      addOutcome === ''
    ) {
      console.log('Insert error here');
    } else {
      WriteValorantData(addChar, addRound, addGun, addOutcome);
      console.log(
        `Character: ${addChar} Round: ${addRound} Gun: ${addGun} Outcome: ${addOutcome}`
      );
    }
  };

  const handleCharChange = (event) => {
    setAddChar(event.target.value);
  };

  const handleRoundChange = (event) => {
    setAddRound(event.target.value);
  };

  const handleGunChange = (event) => {
    setAddGun(event.target.value);
  };

  const handleOutcomeChange = (event) => {
    setAddOutcome(event.target.value);
  };

  useEffect(() => {
    firebase
      .database()
      .ref('/valorant/characters/' + chosenChar + '/charCount')
      .once('value')
      .then((snapshot) => {
        console.log(snapshot.val());
      });
  }, [chosenChar]);

  if (chosenChar === null) {
    return (
      <Grid container>
        <Grid container justify='center'>
          <Grid item>
            <img src={valorantlogo} alt='valorantlogo' />
          </Grid>
        </Grid>
        <Grid container justify='center'>
          {characters.map((value, index) => (
            <Grid key={value} item>
              <List>
                <ListItem button onClick={(event) => chosenCharacter(index)}>
                  <img src={value} alt={`${value}`} />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>

        <InputLabel id='demo-simple-select-label'>Character</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={addChar}
          onChange={handleCharChange}
        >
          <MenuItem value={'breach'}>Breach</MenuItem>
          <MenuItem value={'brimstone'}>Brimstone</MenuItem>
          <MenuItem value={'cypher'}>Cypher</MenuItem>
          <MenuItem value={'jett'}>Jett</MenuItem>
          <MenuItem value={'killjoy'}>Killjoy</MenuItem>
          <MenuItem value={'omen'}>Omen</MenuItem>
          <MenuItem value={'phoenix'}>Phoenix</MenuItem>
          <MenuItem value={'raze'}>Raze</MenuItem>
          <MenuItem value={'reyna'}>Reyna</MenuItem>
          <MenuItem value={'sage'}>Sage</MenuItem>
          <MenuItem value={'skye'}>Skye</MenuItem>
          <MenuItem value={'sova'}>Sova</MenuItem>
          <MenuItem value={'viper'}>Viper</MenuItem>
        </Select>

        <InputLabel id='demo-simple-select-label'>Round</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={addRound}
          onChange={handleRoundChange}
        >
          <MenuItem value={'one'}>1</MenuItem>
          <MenuItem value={'two'}>2</MenuItem>
          <MenuItem value={'three'}>3</MenuItem>
          <MenuItem value={'four'}>4</MenuItem>
          <MenuItem value={'five'}>5</MenuItem>
          <MenuItem value={'six'}>6</MenuItem>
          <MenuItem value={'seven'}>7</MenuItem>
          <MenuItem value={'eight'}>8</MenuItem>
          <MenuItem value={'nine'}>9</MenuItem>
          <MenuItem value={'ten'}>10</MenuItem>
          <MenuItem value={'eleven'}>11</MenuItem>
          <MenuItem value={'twelve'}>12</MenuItem>
          <MenuItem value={'thirteen'}>13</MenuItem>
          <MenuItem value={'fourteen'}>14</MenuItem>
          <MenuItem value={'fifteen'}>15</MenuItem>
          <MenuItem value={'sixteen'}>16</MenuItem>
          <MenuItem value={'seventeen'}>17</MenuItem>
          <MenuItem value={'eighteen'}>18</MenuItem>
          <MenuItem value={'nineteen'}>19</MenuItem>
          <MenuItem value={'twenty'}>20</MenuItem>
          <MenuItem value={'twentyone'}>21</MenuItem>
          <MenuItem value={'twentytwo'}>22</MenuItem>
          <MenuItem value={'twentythree'}>23</MenuItem>
          <MenuItem value={'twentyfour'}>24</MenuItem>
          <MenuItem value={'twentyfive'}>25</MenuItem>
          <MenuItem value={'twentysix'}>26</MenuItem>
          <MenuItem value={'overtime'}>Overtime</MenuItem>
        </Select>

        <InputLabel id='demo-simple-select-label'>Gun</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={addGun}
          onChange={handleGunChange}
        >
          <MenuItem value={'classic'}>Classic</MenuItem>
          <MenuItem value={'frenzy'}>Frenzy</MenuItem>
          <MenuItem value={'shorty'}>Shorty</MenuItem>
          <MenuItem value={'ghost'}>Ghost</MenuItem>
          <MenuItem value={'sherrif'}>Sherrif</MenuItem>
          <MenuItem value={'stinger'}>Stinger</MenuItem>
          <MenuItem value={'spectre'}>Spectre</MenuItem>
          <MenuItem value={'bucky'}>Bucky</MenuItem>
          <MenuItem value={'judge'}>Judge</MenuItem>
          <MenuItem value={'bulldog'}>Bulldog</MenuItem>
          <MenuItem value={'guardian'}>Guardian</MenuItem>
          <MenuItem value={'phantom'}>Phantom</MenuItem>
          <MenuItem value={'vandal'}>Vandal</MenuItem>
          <MenuItem value={'marshal'}>Marshal</MenuItem>
          <MenuItem value={'operator'}>Operator</MenuItem>
          <MenuItem value={'ares'}>Ares</MenuItem>
          <MenuItem value={'oden'}>Oden</MenuItem>
        </Select>

        <InputLabel id='demo-simple-select-label'>Outcome</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={addOutcome}
          onChange={handleOutcomeChange}
        >
          <MenuItem value={'win'}>Win</MenuItem>
          <MenuItem value={'loss'}>Loss</MenuItem>
        </Select>

        <Button
          variant='contained'
          color='primary'
          onClick={(event) => committoDB(null)}
        >
          Primary
        </Button>

        <Grid item>
          <Link to='/'>Home</Link>
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <DisplayPieChart type='character' />
      <List>
        <ListItem button onClick={(event) => chosenCharacter(null)}>
          Reset Choice
        </ListItem>
      </List>
    </div>
  );
}

export default Valorant;
