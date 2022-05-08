import react from "react";

function Header({ getInput, showInputWord}) {

  return (
    <header className="header-bar">
      <nav className="nav-bar">
        <div className="div-img"> 
          <img className="logo" alt="biblia" src="https://cdn-icons-png.flaticon.com/512/4321/4321704.png" />
        </div>
        <div className="div-search-word">
          {!showInputWord ? 
            <span onClick={() => getInput()}>Smart Biblía</span>   
           :<input placeholder="Procurar Palavra" type='search' />}
        </div>        
        <div className="div-img"> 

        {!showInputWord ?
          <img
            onClick={() => getInput()}
            className="img-search"
            src="https://cdn-icons.flaticon.com/png/512/954/premium/954591.png?token=exp=1651857395~hmac=177dc30ccabf91abe6015870da65aeff"alt='img' 
          />
          : 
          <img
          className="img-search"
          src="https://cdn-icons.flaticon.com/png/512/954/premium/954591.png?token=exp=1651857395~hmac=177dc30ccabf91abe6015870da65aeff"alt='img' 
          />
        }
        </div>
      </nav>
    </header>
  )
}

export default Header;