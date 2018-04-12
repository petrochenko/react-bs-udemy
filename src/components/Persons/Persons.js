import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js Inside Constructor]', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js Inside componentWillMount()]');
  }

  componentDidMount() {
    console.log('[Persons.js Inside componentDidMount()]');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js Inside componentWillReceiveProps()]', nextProps);
  }

  // shouldComponentUpdate(nextProps, nexState) {
  //   console.log('[UPDATE Persons.js Inside shouldComponentUpdate()]', nextProps, nexState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.delete !== this.props.delete ||
  //     nextProps.change !== this.props.change;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nexState) {
    console.log('[UPDATE Persons.js Inside componentWillUpdate()]', nextProps, nexState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js Inside componentDidUpdate()]');
  }

  render() {
    console.log('[Persons.js Inside render()]');
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.delete(index)}
        name={person.name}
        position={index}
        ref={this.lastPersonRef}
        age={person.age}
        changed={(event) => this.props.change(event, person.id)}
      />
    });
  }
}

export default Persons;
