import React, { Component } from "react";
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
          
          todoList: todoItems
        };
      }
      
      
      renderItems = () => {
       
        const newItems = this.state.todoList;
        return newItems.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2 `}
              title={item.url}
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
            <h1 className="text-white text-uppercase text-center my-4">Contacts</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button className="btn btn-primary">Add task</button>
                  </div>
                  
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
      }
    }
    export default App;