import React,{useState} from "react";
import InitialPage  from "./pages/InitialPage/InitialPage";
import MatchPage from "./pages/MatchPage/MatchPage"

function App() {
  const [page,setPage]=useState('home')
  const changePage = () =>{
    switch (page) {
      case 'home':
        return <InitialPage changePage={switchPage}/>
      case 'match':
        return <MatchPage changePage={switchPage}/>
      default:
        <InitialPage/>
    }
  }
  
  const switchPage = (pages)=>{
    setPage(pages)
  }
  
  return (
    <div className="App">
      {changePage()}
    </div>
  );
}

export default App;
