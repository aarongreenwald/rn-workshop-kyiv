import * as firebase from 'firebase';
import _ from 'lodash';


/*
  Note: This firebase project will be deleted after the workshop
 */

const config = {
  apiKey: "AIzaSyAhfr4_9SHYgS0KHYxzEe3uNv-kY-nwh2s ",
  databaseURL: "https://rn-workshop-kyiv.firebaseio.com/",
  projectId: "rn-workshop-kyiv",
};

const firebaseApp = firebase.initializeApp(config);
let dbRef;

export const subscribeToMessages = ({channel, callback}) => {
  dbRef = firebaseApp.database().ref('/channels/' + channel);

  dbRef.on('value', snap => {
    const messages = [];
    snap.forEach(item => {
      messages.push({...item.val(), id: item.key});
    });

    _.sortBy(messages, 'timestamp');

    callback(messages);
  });

  return db => dbRef.off();

};

export const addMessage = ({text, sender}) => dbRef.push({text, sender, timestamp: {".sv" : "timestamp"}});
