import React from 'react';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            priority: ""
        }
    }

    render() {
        return (
            <form>
                <label htmlFor="name">
                    Task name:
                </label>
                <div>
                    <input type="text" name="name" id="name"/>
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
                    <button>
                        Save task
                    </button>
                </div>
            </form>
        );
    }
}

export default TaskForm;
