import React from 'react';
import Firebase, { auth, firestore } from './firebase/config'; // Adjust path if necessary

function App() {
  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword("fuad@gmail.com", "123456")
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Example: Use Firestore
        firestore.collection('Users').get().then((snap) => {
          console.log(snap);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors
        console.error(errorMessage);
      });
  };

  return (
    <div>
      <button onClick={handleSignUp}>Click me</button>
    </div>
  );
}

export default App;
