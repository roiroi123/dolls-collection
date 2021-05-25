import React,{usState}  from "react";
import "./App.css";
import Container from "./Components/Container/Container";

const dollsContext = React.createContext()

function App() {

  return (
    <div className="App">
        <Container />
    </div>
  );
}

export default App;
