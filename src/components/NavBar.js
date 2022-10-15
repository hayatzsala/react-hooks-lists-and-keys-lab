import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    {links.map(element => <a href={'#'+element} key={element}>{element}</a>)}
    </nav>;
}

export default NavBar;
