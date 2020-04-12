import React, { Component } from "react";
import {
  handleChangeAction,
  handleSubmitAction,
  handleDeleteAction,
} from "../actions";
import { connect } from "react-redux";
export class App extends Component {
  handleChange = (event) => {
    this.props.handleChangeAction(event.target.value);
  };
  onFormSubmit = (event) => {
    event.preventDefault();
  };
  onSubmitButtonClick = () => {
    this.props.handleSubmitAction(this.props.text);
  };
  onDeleteClick = (id) => {
    this.props.handleDeleteAction(id);
  };
  onEditClick = (value) => {};
  render() {
    if (this.props.todo) {
      return (
        <div style={{ marginTop: "25px" }} className="ui container">
          <h2 style={{ textAlign: "center" }}>Todo List</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className="ui action fluid input">
              <input
                type="text"
                placeholder="Add Item..."
                onChange={this.handleChange}
                value={this.props.text}
              />
              {this.props.text === "" ? (
                <button className="ui button disabled">Add Item</button>
              ) : (
                <button
                  onClick={this.onSubmitButtonClick}
                  className="ui button primary"
                >
                  Add Item
                </button>
              )}
            </div>
          </form>

          <div className="ui celled list">
            {this.props.todo.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="right floated content">
                    <div
                      onClick={() => this.onEditClick(item.name)}
                      className="ui button primary"
                    >
                      EDIT
                    </div>
                    <div
                      onClick={() => this.onDeleteClick(item.id)}
                      className="ui button negative"
                    >
                      DELETE
                    </div>
                  </div>
                  <div className="content">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "25px" }} className="ui container">
          <h2 style={{ textAlign: "center" }}>Todo List</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="ui action fluid input">
              <input
                type="text"
                placeholder="Add Item..."
                onChange={this.handleChange}
                value={this.props.text}
              />
              {this.props.text === "" ? (
                <button className="ui button disabled">Add Item</button>
              ) : (
                <button className="ui button primary">Add Item</button>
              )}
            </div>
          </form>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.todo.text,
    todo: state.todo.todo,
  };
};

export default connect(mapStateToProps, {
  handleChangeAction,
  handleSubmitAction,
  handleDeleteAction,
})(App);
