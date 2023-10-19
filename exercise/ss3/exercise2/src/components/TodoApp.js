import React, {Component} from "react";
import '../index.css';


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    handleChange = (even) => {
        this.setState({item: even.target.value});
    }

    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                list: [this.state.list, this.state.item]
            });
        }
    }

    render() {
        return (
            <div id="list">
                <h1>Todo List</h1>
                <input type="text"
                       value={this.state.item}
                       onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                {this.state.list.map((element, index) =>
                    <p key={index}>{element}</p>
                )}
            </div>
        )
    }
}

export default TodoApp;