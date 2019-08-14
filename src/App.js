import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Task from './components/Task';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  render() {
    const removeTask = id => {
      const taskIndex = this.state.tasks.map(task => {
        return task.id
      }).indexOf(id);

      let tasks = this.state.tasks;
      tasks.splice(taskIndex, 1);
      this.setState({ tasks: tasks })
    }

    const tasks = this.state.tasks.map(task => {
      return (
        <Task onTaskDeleted={removeTask.bind(this)}
          id={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority} />
      );
    });

    const createTask = task => {
      const tasks = this.state.tasks;
      tasks.unshift(task);
      this.setState({ tasks: tasks })
    }

    return (
      <div className="card mt-4">
        <TaskForm onTaskCreated={createTask.bind(this)}></TaskForm>
        <div className="container">
          {tasks}
        </div>
      </div>
    );
  }
}

  export default App;
