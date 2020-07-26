import React, { useEffect, useState, setUser } from "react";
import firebase, { provider, firestore } from "./firebase";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import { useGoogleMaps } from "react-hook-google-maps";

import "./App.module.scss";
import NavBar from "./containers/NavBar";

function App() {
  const [likes, increaseLikes] = useState(0);
  const [dislikes, decreaseLikes] = useState(0);
  const [user, setUSer] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const geoSuccess = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const geoError = () => {
    alert("Geocoder failed.");
  };

  getLocation();

  // const getLyrics = () => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/js?key=AIzaSyCrCd6nz3v5xcgdR-zAu1OtElN_PcpBvbI&callback=initMap`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {})
  //     .catch((err) => console.log(err));
  // };

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyCrCd6nz3v5xcgdR-zAu1OtElN_PcpBvbI",
    // NOTE: even if you change options later
    {
      center: { lat: latitude, lng: longitude },
      zoom: 10,
    }
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)

  return (
    <>
      <NavBar signIn={signIn} signOut={signOut} user={user} />
      <div>
        <p>Test</p>
        <button
          onClick={() => {
            increaseLikes(likes + 1);
          }}
        >
          Increase Likes
        </button>
        <p>{likes}</p>

        <button
          onClick={() => {
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

      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>

      {/* <button
        onclick={() => {
          getLocation();
        }}
      ></button> */}
      {/* <p>{showPosition()}</p> */}

      {/* <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      /> */}
      <div ref={ref} style={{ width: 400, height: 300 }} />
    </>
  );
}

export default App;
