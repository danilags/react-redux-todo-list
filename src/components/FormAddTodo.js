// import React from 'react';
// import { connect } from 'react-redux';
// import AutoComplete from 'material-ui/AutoComplete';
// import DatePicker from 'material-ui/DatePicker';
//
// import { addTodo } from '../actions';
//
// /**
//  * The input is used to create the `dataSource`, so the input always matches three entries.
//  */
// class AddTodoList2 extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   state = {
//     dataSource: [],
//   };
//
//   handleUpdateInput = (value) => {
//     this.setState({
//       dataSource: [
//         value,
//         value + value,
//         value + value + value,
//       ],
//     });
//   };
//
//   render() {
//     const { title, createdAt, completed } = this.state;
//     return (
//       <div>
//         <form >
//           <AutoComplete
//           hintText="Type anything"
//           dataSource={this.state.dataSource}
//           onUpdateInput={this.handleUpdateInput}
//           floatingLabelText="Full width"
//           fullWidth={true}
//         />
//           <DatePicker hintText="Add Date.."
//             onChange = {(event, value) => {
//               this.setState({ createdAt: value });
//             }}
//           />
//         </form>
//       </div>
//     );
//   }
// }
//
// const mapDispatchToProps = dispatch => ({
//   addTodo: newTodo => dispatch(addTodo(newTodo)),
// })
//
// export default connect(null, mapDispatchToProps)(AddTodoList2);
