import "./Nav.css";
import React from "react";
function NavBar(props) {
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <a href="#">Save</a>
        <a href="#" onClick={props.search}>
          Search
        </a>
        <a href="#">Attend</a>
      </div>
    </div>
  );
}
export default NavBar;
