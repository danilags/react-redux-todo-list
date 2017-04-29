import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      completed: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState({
      title: e.target.value
    });
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addTodo(this.state)
            this.setState({title: '', createdAt: ''})
          }}>
          <input type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
})

export default connect(null, mapDispatchToProps)(AddTodoList);
