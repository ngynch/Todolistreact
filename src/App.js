import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Essen',
        completed: false
      },
      {
        id: 2,
        title: 'Trinken',
        completed: true
      },
      {
        id: 3,
        title: 'Schlafen',
        completed: false
      }
    ]
  }

  markComplete = (e) => { 
    console.log("helloos")
  }
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
