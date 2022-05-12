import react, { useState } from "react";
import HeadComponent from '../HeadComponent'
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import VerseDay from "../VerseDay";

function HomeComponent() {
  const [showInputWord, setShowInputWord] = useState(false);
  const [books, setBooks] = useState(false);

  const toggleInputWord = () => {
    setShowInputWord(!showInputWord);
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
        toggleInputWord={toggleInputWord} 
        showInputWord={showInputWord}
      />
      <Sidebar 
        showbooks={showBooks}  
        books={books}
      />
      <VerseDay />
      <Content />
    </div>
  )
}

export default HomeComponent;