import React, { Component } from "react";
import Modal from "./components/Modal";

const todoItems = [
  {
    id: 1,
    description: "Go to Market",
    url: "https://www.w3schools.com",
    
  },
  {
    id: 2,
    description: "Study",
    url: "https://www.google.co.in",
    
  },
  {
    id: 3,
    description: "Sally's books",
    url: "https://youtube.com",
    
  }
  
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        url: "",
        description: "",
       
      },
      todoList: todoItems
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    alert("save" + JSON.stringify(item));
  };
  handleDelete = item => {
    alert("delete" + JSON.stringify(item));
  };
  createItem = () => {
    const item = { url: "https://example.com", description: "website description" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  

  renderItems = () => {
       
    const newItems = this.state.todoList;
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 `}
          url={item.url}
        >
         <a href={item.url} >{item.description}</a>
        </span>
        <span>
      <button
        onClick={() => this.editItem(item)}
        className="btn btn-secondary mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => this.handleDelete(item)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>
              
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;