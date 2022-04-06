import React from "react";
import Cadastro from "./components/Cadastro";
import Users from "./components/Users";


class App extends React.Component {
  
  render(){
    return (
      <div>
        <Cadastro/>
        <Users/>
  
      </div>
    );
  
  }

}

export default App;
