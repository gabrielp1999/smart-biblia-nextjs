import react from "react";
import NavDefault from "../NavDefault";
import NavSearch from "../NavSearch";

function Header({ getInput, showInputWord }) {


  return (
    <header className="header-bar">
    {!showInputWord ? <NavDefault getInput={getInput}/> : <NavSearch />}
    </header>
  )
}

export default Header;