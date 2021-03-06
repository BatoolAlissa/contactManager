import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding={"Contact Manager"} />
        <div>
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
