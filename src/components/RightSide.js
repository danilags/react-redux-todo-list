import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoDone from 'material-ui/svg-icons/action/done';
import TodoUnDone from 'material-ui/svg-icons/content/clear';
import TodoDelete from 'material-ui/svg-icons/action/delete';

import { completeTodo, uncompleteTodo, deleteTodo } from '../actions';
import EditForm from './EditForm';
import { filterTodo } from '../selectors';


const styles = {
  doneBtn: {
    marginLeft: 10,
    marginTop: 5,
  },
  rapih: {
    marginLeft: 55
  },
  card1: {
    backgroundColor: '#ccc',
  },
  card2: {
    backgroundColor: '#fff',
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      completed: false,
    };
  }

  handleChange(id, completed) {
    if (completed === false){
      this.props.uncompleteTodo(id)
    } else {
      this.props.completeTodo(id)
    }
  }

  removeTodo(id) {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) =>
          <div key={index}>
            <Card style={todo.completed === false ? styles.card1 : styles.card2}>
              <CardHeader
                title={todo.title}
                actAsExpander={false}
                showExpandableButton={false}
              />
              <TableRowColumn>
                <FloatingActionButton
                  mini={true}
                  style={styles.doneBtn}
                  backgroundColor='green'
                  onClick={() => this.handleChange(todo.id, todo.completed)}
                >
                  { todo.completed === false ? <TodoDone /> : <TodoUnDone />}
                </FloatingActionButton>
              </TableRowColumn>
              <TableRowColumn />
              <CardActions>
                <FlatButton
                  label="Delete"
                  onClick={() => this.removeTodo(todo.id)}
                />
              </CardActions>
              <TableRowColumn>
                <EditForm todoId={todo.id} todoTitle={todo.title}/>
              </TableRowColumn>
            </Card>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodo(state.todos, state.searchKeyword),
    searchKeyword: state.searchKeyword,
  }
}

const mapDispatchToProps = dispatch => ({
  completeTodo: todoId => dispatch(completeTodo(todoId)),
  uncompleteTodo: todoId => dispatch(uncompleteTodo(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
