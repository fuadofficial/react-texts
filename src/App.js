import React from 'react';
import Firebase from './firebase/config';  // Adjust the path if necessary

function App() {
  return (
    <div>
      <button onClick={() => {
        Firebase.firestore().collection('product').get().then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data());
          });
        });
      }}>Click me</button>
    </div>
  );
}

export default App;
