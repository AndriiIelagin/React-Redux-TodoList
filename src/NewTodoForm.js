import React, {Component} from 'react';

export default class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
        e.target.reset();
        this.props.history.push("/todos");
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="task" id="task" placeholder="What needs to be done?" onChange={this.handleChange} />
                </div>
                <button className="btn btn-outline-primary">Add a Todo</button>
            </form>    
        );
    }
}