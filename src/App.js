import { db } from './firebase/config'; // Adjust the path based on your file structure
import React from 'react';

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        db.firestore().collection('product').get().then(snapshot => {
          snapshot.forEach((obj) => {
            console.log(obj.data());
          });
        });
      }} > Click</button>
    </div >
  );
}

export default App;


