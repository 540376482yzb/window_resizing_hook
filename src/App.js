import React from "react";
import useWindow from "./useWindow.hook";
import "./App.css";

class App extends React.Component() {
  render() {
    const { width, height, setHeight, setWidth } = useWindow();
    return (
      <div className="App">
        <header className="App-header">
          <div>width: {width}</div>
          <div>height: {height}</div>
        </header>
      </div>
    );
  }
}

export default App;
