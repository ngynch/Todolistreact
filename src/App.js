import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
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
  // Toggle Complete
  markComplete = (id) => { 
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
    console.log(this.state.todos[id-1].title)
  }

  delTodo = (id) => {
    this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddToDo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
