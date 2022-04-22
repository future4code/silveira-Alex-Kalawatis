import React,{useState} from "react";
import InitialPage  from "./pages/InitialPage/InitialPage";
import MatchPage from "./pages/MatchPage/MatchPage"
import { GlobalStyle, MainApp } from "./style";

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
    <MainApp>
      <GlobalStyle/>
      {changePage()}
    </MainApp>
  );
}

export default App;
