import React from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { addTodo } from '../actions';

const styles = {
  formAdd: {
    width: '300px',
    height: '30px',
    marginTop: '40px',
    fontSize: '16px',
  },
  btnAdd: {
    marginLeft: '10px',
    marginTop: '30px',
  }
}

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
            style={styles.formAdd}
          />
          <FloatingActionButton type="submit" mini={true} style={styles.btnAdd}>
            <ContentAdd />
          </FloatingActionButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
})

export default connect(null, mapDispatchToProps)(AddTodoList);
