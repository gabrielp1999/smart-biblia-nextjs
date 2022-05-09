import react, { useState } from "react";
import HeadComponent from '../HeadComponent'
import Header from "../Header";
import Sidebar from "../Sidebar";

function HomeComponent() {
  const [showInputWord, setShowInputWord] = useState(false);
  const [books, setBooks] = useState(false);

  const getInput = () => {
    if(!showInputWord){
      setShowInputWord(true);
    }else{
      setShowInputWord(false);
    }
  }

  const showBooks = () => {
    if(books === false){
      setBooks(true);
    }else{
      setBooks(false);
    }
  }

  return (
    <div className="home">
      <HeadComponent />
      <Header 
        getInput={getInput} 
        showInputWord={showInputWord}
      />
      <Sidebar 
        showbooks={showBooks}  
        books={books}
      />
    </div>
  )
}

export default HomeComponent;