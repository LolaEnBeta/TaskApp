import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks : []
    }
  }
  render() {

    return (
      <div className="container">
        <TaskForm />
      </div>
    );
  }
}

export default App;
