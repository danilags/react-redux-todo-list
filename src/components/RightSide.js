import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CompleteTodo from './CompleteTodo';

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) =>

        <Card key={index}>
          <CardHeader
            title={todo.title}
            subtitle={todo.createdAt}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Delete" />
          </CardActions>
          <CardText expandable={true}>
            Edit <input type="text"></input>
          </CardText>
          <CompleteTodo />
        </Card>

      )}


    </div>

  )
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList);
