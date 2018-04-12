import React, {PureComponent} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js Inside Constructor]', props);
  }
  // changed
  componentWillMount() {
    console.log('[App.js Inside componentWillMount()]');
  }

  componentDidMount() {
    console.log('[App.js Inside componentDidMount()]');
  }

  // changed
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js Inside componentWillReceiveProps()]', nextProps);
  }

  // shouldComponentUpdate(nextProps, nexState) {
  //   console.log('[UPDATE App.js Inside shouldComponentUpdate()]', nextProps, nexState);
  //   return nexState.persons !== this.state.persons ||
  //     nexState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  // changed
  componentWillUpdate(nextProps, nexState) {
    console.log('[UPDATE App.js Inside componentWillUpdate()]', nextProps, nexState);
  }

  // new
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js Inside getDerivedStateFromProps()]',
      nextProps,
      prevState);

    // should return new state
    return prevState
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js Inside getSnapshotBeforeUpdate()]');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js Inside componentDidUpdate()]');
  }

  state = {
    persons: [
      {id: 'fdsfds', name: 'Sergey', age: 33},
      {id: 'fdsfs', name: 'Alex', age: 25},
      {id: 'efdsds', name: 'Felix', age: 18}
    ],
    user: {
      name: 'Sergey'
    },
    toggleClicked: 0,
    authenticated: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    //  const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  };

  togglePersonsHendler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js Inside render()]');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            change={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPersons}
          toggle={this.togglePersonsHendler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>

      </Aux>
    );
  }
}

export default withClass(App, styles.App);
