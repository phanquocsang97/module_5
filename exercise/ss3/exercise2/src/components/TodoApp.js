import React, {Component} from "react";
import '../index.css';


class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ""
        }
    }

    handleChange = (even) => {
        this.setState({item: even.target.value});
    }

    handleAddItem = () => {
        if (this.state.item !== "") {
            this.setState((prev) =>{
                return{
                    list: [...prev.list, this.state.item]
                }
            });
        }
    }

    render() {
        return (
            <div id="list">
                <h1>Todo List</h1>
                <input type="text"
                       value={this.state.item}
                       onChange={(temp) =>{
                           this.handleChange(temp)
                       }}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((element, index) =>
                        <li key={index}>{element}</li>
                    )}
                </ul>

            </div>
        )
    }
}

export default TodoApp;