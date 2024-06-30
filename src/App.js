import React from 'react';
import Firebase from './firebase/config';  // Adjust the path if necessary

function App() {
  return (
    <div>
      <button onClick={() => {
        Firebase.firestore().collection('Users').doc('MPCOHlkXX1MsXwO5yolS').delete().then(()=>{
          console.log("deleted value")
        })
      }}>Click me</button>
    </div>
  );
}

export default App;
