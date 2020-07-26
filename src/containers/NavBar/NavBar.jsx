import React, { useState } from "react";
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
      <h1>Contact Council </h1>
      <p>{signInOutJsx}</p>

      <div>
        <p>New</p>
        <p>Previous Points</p>
        <p>Messages</p>
        <p>Another</p>
      </div>
      <FontAwesomeIcon icon={faExclamation} />
      <FontAwesomeIcon icon={faCheckCircle} />
    </>
  );
};

export default NavBar;
