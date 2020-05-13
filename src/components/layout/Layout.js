import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/Home";
import Politica from "../../pages/Politica";
import Internacional from "../../pages/Internacional";
import Tecnologia from "../../pages/Tecnologia";
import Espectaculos from "../../pages/Espectaculos";
import Deportes from "../../pages/Deportes";

const Layout = () => {
  return (
    <Router>
      <div>
        <Nav>
          <Ul>
            <Li>
              <Link to="/">Home</Link>
            </Li>
            <Li>
              <Link to="/politica">Politica</Link>
            </Li>
            <Li>
              <Link to="/internacional">Internacional</Link>
            </Li>
            <Li>
              <Link to="/tecnologia">Tecnología</Link>
            </Li>
            <Li>
              <Link to="/espectaculos">Espectaculos</Link>
            </Li>
            <Li>
              <Link to="/deportes">Deportes</Link>
            </Li>
          </Ul>
        </Nav>

        <Switch>
          <Route path="/politica">
            <Politica />
          </Route>
          <Route path="/internacional">
            <Internacional />
          </Route>
          <Route path="/tecnologia">
            <Tecnologia />
          </Route>
          <Route path="/espectaculos">
            <Espectaculos />
          </Route>
          <Route path="/deportes">
            <Deportes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;

const Li = styled.li`
  display: block;
  font-size: 16px;
  padding: 7px 5px;
  a {
    color: #3b4359;
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

const Nav = styled.nav`
  padding: 5px 20px;
`;
