import React, {Component} from 'react';
import AddUser from './components/AddUser';
import './App.css';
class App extends Component {
  state = {
    users: [],
  };
  addUser = obj => {
    const users = this.state.users.slice ();
    users.push (obj);
    this.setState ({
      users,
    });
  };
  render () {
    return (
      <div>
         <header>
          <h1>Let's Talk</h1>
          <p>Think you have what it takes? show us.</p>
        </header> 
        <AddUser addUser={this.addUser} />        
      </div>
    );
  }
}

export default App;