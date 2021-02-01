import firebase from 'firebase';

export default function WriteValorantData(character, round, gun, outcome) {
  console.log('here');
  var charCountRef = firebase
    .database()
    .ref('valorant/characters/' + character + '/charCount');
  incrementCount(charCountRef);

  var totalCharGunCountRef = firebase
    .database()
    .ref('valorant/characters/' + character + '/gunCount/' + gun);
  incrementCount(totalCharGunCountRef);

  var roundGunCountRef = firebase
    .database()
    .ref(
      'valorant/characters/' +
        character +
        '/round/' +
        round +
        '/' +
        gun +
        '/count'
    );
  incrementCount(roundGunCountRef);

  var totalGunCountRef = firebase.database().ref('valorant/guns/' + gun);
  incrementCount(totalGunCountRef);

  var outcomeCountRef = firebase
    .database()
    .ref(
      'valorant/characters/' +
        character +
        '/round/' +
        round +
        '/' +
        gun +
        '/' +
        outcome
    );
  incrementCount(outcomeCountRef);
}

function incrementCount(countRef) {
  countRef.transaction((count) => {
    count++;
    return count;
  });
}
