import React, { Component } from "react";
export class App extends Component {
  state = {
    todo: [],
    text: "",
  };
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: [...this.state.todo, { name: this.state.text, id: Math.random() }],
      text: "",
    });
  };
  onDeleteClick = (id) => {
    const newTodos = this.state.todo.filter((item) => item.id !== id);
    this.setState({ todo: newTodos });
  };
  onEditClick = (value) => {
    this.setState({ text: value });
  };
  render() {
    if (this.state.todo) {
      return (
        <div style={{ marginTop: "25px" }} className="ui container">
          <h2 style={{ textAlign: "center" }}>Todo List</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="ui action fluid input">
              <input
                type="text"
                placeholder="Add Item..."
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button className="ui button primary">Add Item</button>
            </div>
          </form>

          <div className="ui celled list">
            {this.state.todo.map((item) => {
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
                value={this.state.text}
              />
              <button className="ui button primary">Add Item</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default App;
