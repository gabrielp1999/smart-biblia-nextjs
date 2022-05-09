import React from "react";
import Image from "next/image";

function NavDefault({ getInput }) {
  return(
    <nav className="nav-bar">
      <div className="div-img"> 
        <Image  
          alt="biblia" 
          src="/img/logo.png" 
          width={35}
          height={35}
        />
      </div>
      <div className="div-search-word">
        <span>Smart Biblía</span>   
      </div>        
      <div className="div-img"> 
        <Image
          onClick={() => getInput()}
          src="/img/lupa.png"
          alt='' 
          height={30}
          width={30}
        />
      </div>
  </nav>
  )
}

export default NavDefault;