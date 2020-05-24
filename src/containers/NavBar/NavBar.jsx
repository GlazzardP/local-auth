import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faCheckCircle,

} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { signIn, SignOut } = props;
  return (
    <>
      <h1>Contact Council</h1>
      <div className={styles.authentication}>
        <p>Sign In</p>
        <p>Sign Out</p>


      </div>
      <FontAwesomeIcon icon={faExclamation} />
      <FontAwesomeIcon icon={faCheckCircle} />
    </>
  );
};

export default NavBar;
