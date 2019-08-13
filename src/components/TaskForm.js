import React from 'react';

class TaskForm extends React.Component {


    render() {

        return (
            <div className="card mt-4">
                <label htmlFor="name">
                    Task name:
                    </label>
                <div>
                    <input type="text" name="name" id="name" />
                </div>

                <label htmlFor="description">
                    Description:
                    </label>
                <div>
                    <input type="text" name="description" id="description" />
                </div>

                <label htmlFor="priority">
                    Priority:
                    </label>
                <div>
                    <select id="priority" name="priority" >
                        <option value="">Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.saveTask.bind(this)} className="mt-3">
                        Save task
                        </button>
                </div>
            </div>
        );
    }
    saveTask(e) {
        const nameInput = document.getElementById("name");
        const descriptionInput = document.getElementById("description");
        const priorityInput = document.getElementById("priority");

        let newTask = {
            name: nameInput.value,
            description: descriptionInput.value,
            priority: priorityInput.value
        }

        this.props.onTaskCreated(newTask);
    }
}

export default TaskForm;
