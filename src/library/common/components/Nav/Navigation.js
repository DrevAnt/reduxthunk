import React from "react";
import { Nav, NavLink, NavMenu } from "../NavbarStyledComponents";

function Navigation() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>React/Redux/Router</h1>
        </NavLink>

        <NavMenu>
          <NavLink to="/UsersList">Users</NavLink>

          <NavLink to="/PostsList">Posts</NavLink>

          <NavLink to="/TodoList">Todo</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navigation;
