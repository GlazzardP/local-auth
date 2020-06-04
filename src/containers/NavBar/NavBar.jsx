import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { signIn, signOut, user } = props;

  const signInOutJsx = user ? (
    <button onClick={signOut}>Log Out</button>
  ) : (
    <button onClick={signIn}>Log in</button>
  );

  return (
    <>
      <h1>Contact Council</h1>
      <div className={styles.authentication}>
        {/* <p
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </p>
        <p
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </p> */}

        <p>{signInOutJsx}</p>
      </div>
      <FontAwesomeIcon icon={faExclamation} />
      <FontAwesomeIcon icon={faCheckCircle} />
    </>
  );
};

export default NavBar;
