import React from 'react';

import styles from './Cockpit.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';


const cockpit = (props) => {
  let classes = [];
  let btnClass = styles.Button;

  if (props.showPerson) {
    btnClass = [styles.Button, styles.Red].join(' ');
  }
  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <Aux>
      <h1>Hi, I'm React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass}
              onClick={props.toggle}>{props.showPerson ? 'Hide Persons' : 'Show persons'}</button>
      <button onClick={props.login}>Login</button>
    </Aux>
  );
};

export default cockpit;
