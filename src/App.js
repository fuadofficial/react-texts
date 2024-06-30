import React from 'react';
import Firebase from './firebase/config';  // Adjust the path if necessary

function App() {
  return (
    <div>
      <button onClick={() => {
        Firebase.firestore().collection('Users').doc('1111111').set({
          Name: 'Aju',
          Age: 22,
          Place: "Calicut"
        }).then(()=>{
          console.log("Value updated");
        })
      }}>Click me</button>
    </div>
  );
}

export default App;
