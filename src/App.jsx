import React, { useEffect, useState, setUser } from "react";
import firebase, { provider, firestore } from "./firebase";

import "./App.module.scss";
import NavBar from "./containers/NavBar";
import SideNav from "./containers/SideNav";

function App() {
  const [likes, increaseLikes] = useState(0);
  const [dislikes, decreaseLikes] = useState(0);
  const [user, setUSer] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch((error) => {
        alert("Oh no an error :(");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const addUserToDb = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .set({ user: "hello" })
      // .then(() => {
      //   fetchUserData();
      // })
      .catch((error) => console.log(error));
  };

  // var x = document.getElementById("demo");

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     // x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // };
  // getLocation();

  // const showPosition = (position) => {
  //   // x.innerHTML = "Latitude: " + position.coords.latitude +
  //   // "<br>Longitude: " + position.coords.longitude;
  //   return <p>Latitude: {position.coords.latitude}</p>;
  //   return <p>Longitude: {position.coords.longitude}</p>;
  // };

  return (
    <>
      <NavBar signIn={signIn} signOut={signOut} user={user} />
      <div>
        <p>Test</p>
        <button
          onclick={() => {
            increaseLikes(likes + 1);
          }}
        >
          Likes
        </button>
        <p>{likes}</p>

        <button
          onclick={() => {
            increaseLikes(dislikes + 1);
          }}
        >
          Dislikes
        </button>
        <p>{dislikes}</p>
      </div>

      <button
        onClick={() => {
          addUserToDb();
        }}
      >
        DB TEST
      </button>

      {/* <button
        onclick={() => {
          getLocation();
        }}
      ></button> */}
      {/* <p>{showPosition()}</p> */}
    </>
  );
}

export default App;
