import React, {Component} from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import withClass from "../../../hoc/withClass";
import propTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js Inside Constructor]', props);
    this.inpEl = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js Inside componentWillMount()]');
  }

  componentDidMount() {
    console.log('[Person.js Inside componentDidMount()]');
    if(this.props.position < 1) {
      // this.inpEl.focus();
      this.inpEl.current.focus();
    }
  }

  componentWillUnmount() {
    console.log(('[Person.js Inside componentWillUnmount()]'));
  }

  focus() {
    this.inpEl.current.focus();
  }

  render() {
    console.log(('[Person.js Inside render()]'));
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          //(inp) => {this.inpEl = inp}
          ref={this.inpEl}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
};

export default withClass(Person, styles.Person);
