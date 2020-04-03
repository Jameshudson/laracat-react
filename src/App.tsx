import React from 'react';
import './App.css';

export default class TodoList extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {value: ''};
    }

    public handleSubmit(event: any) {

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <table>
                        <tr>
                            <th>Date added</th>
                            <th>Task</th>
                            <th>Done</th>
                        </tr>
                        <tr>
                            <td>Date added</td>
                            <td>Todo</td>
                            <td>Done</td>
                        </tr>
                    </table>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Task?
                            <input type="text" name="task"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>
        );
    }
}
