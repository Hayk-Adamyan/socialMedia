import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile postData={props.postData} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
