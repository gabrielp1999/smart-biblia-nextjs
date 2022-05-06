import react, { useState } from "react";
import HeadComponent from '../HeadComponent'
import Header from "../Header";
import Sidebar from "../Sidebar";

function HomeComponent() {
  const [showInputWord, setShowInputWord] = useState(false);

  const getInput = () => {
    if(!showInputWord){
      setShowInputWord(true);
    }else{
      setShowInputWord(false);
    }
  }

  return (
    <div className="home">
      <HeadComponent />
      <Header 
        getInput={getInput} 
        showInputWord={showInputWord}
      />
      <Sidebar />
    </div>
  )
}

export default HomeComponent;