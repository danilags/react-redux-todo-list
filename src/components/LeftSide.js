import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class AddTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      createdAt: '',
      completed: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
  }

  render() {
    const { title, createdAt, completed } = this.state
    return (
      <div>
        <Paper style={style} zDepth={5} />
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
          <input type="text"
            name="createdAt"
            value={createdAt}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    )



  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
})

export default connect(null, mapDispatchToProps)(AddTodoList);
