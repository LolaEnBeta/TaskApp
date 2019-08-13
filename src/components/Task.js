import React from 'react';

class Task extends React.Component {

    render() {

        return (
            <div className="col-md-3">
                <div className="card mt-5 mb-5">
                    <div className="card-header">
                        {this.props.name}
                    </div>
                    <div className="card-body">
                        {this.props.description}
                    </div>
                    <div className="card-body">
                        {this.props.priority}
                    </div>
                    <button onClick={this.deleteTask.bind(this)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
    deleteTask() {
        let taskToDelete = this.props.name

        this.props.onTaskDeleted(taskToDelete);
    }
}

export default Task;
