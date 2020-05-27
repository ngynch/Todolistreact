import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import './App.css';
import {v4 as uuid} from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Essen',
        completed: false
      },
      {
        id: uuid(),
        title: 'Trinken',
        completed: true
      },
      {
        id: uuid(),
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

  //ADd todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
               <AddToDo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
