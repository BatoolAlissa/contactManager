import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Batool Alissa",
        email: "balissa@gmil.com",
        phone: "55-555-5555"
      },
      {
        id: 2,
        name: "Karen Doe",
        email: "karen@gmil.com",
        phone: "33-333-3333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmil.com",
        phone: "66-666-6666"
      }
    ]
  };

  render() {
    return (
      // value is available any where
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
