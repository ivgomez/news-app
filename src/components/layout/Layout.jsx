import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../../const/categories";
import MainPage from "../../pages/MainPage";
import SearchBar from "../SearchBar";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route component={SearchBar} />
      <Nav>
        <InputWrapper id="mainNavButton" />
        <LabelWrapper htmlFor="mainNavButton" onclick>
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
        </LabelWrapper>
        <Ul>
          {categories.map(
            (p) =>
              p.id !== 7 && (
                <Li key={p.title}>
                  <Link to={p.path}>{p.title}</Link>
                </Li>
              )
          )}
        </Ul>
      </Nav>
      <Switch>
        {categories.map((p) => (
          <Route
            exact={p.path === "/"}
            path={p.path}
            component={(props) => <MainPage {...props} category={p.id} />}
            key={p.id}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;

const IconWrapper = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;

const InputWrapper = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: -9999px;
  left: -9999px;
  &:checked ~ ul,
  &:checked ~ ul li {
    display: block !important;
    @media (min-width: 769px) {
      /* older flexbox */
      display: -webkit-box;
      display: -moz-box;
      display: box;
      -webkit-box-orient: horizontal;
      -moz-box-orient: horizontal;
      box-orient: horizontal;
      /* newer flexbox */
      display: flex;
      flex-direction: row;
    }
  }
`;

const Li = styled.li`
  a {
    display: block;
    padding: 1em;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    color: #fb2865;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    transition: color 0.1s, background-color 0.1s;
  }
  a {
    position: relative;
    display: block;
    padding: 16px 0;
    margin: 0 12px;
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 900;
    text-transform: uppercase;
    transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
    color: #000;
  }
  a::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #fb2865;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  a:active::before {
    background-color: #fb2865;
  }
  a:hover::before,
  a:focus::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
  @media (min-width: 769px) {
    position: relative;
    text-align: center;
    /* older flexbox */
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    flex: 1;
    &:hover > ul {
      display: block !important;
    }
  }
`;

const Ul = styled.ul`
  display: none;
  width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0px;
  @media (min-width: 769px) {
    /* older flexbox */
    display: -ms-flexbox;
    flex-direction: -ms-row;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    box-orient: horizontal;
    /* newer flexbox */
    display: flex;
    flex-direction: row;
  }
`;

const Nav = styled.nav`
  position: relative;
  padding: 10px 20px;
`;

const LabelWrapper = styled.label`
  position: relative;
  display: block;
  min-height: 2em;
  padding: 0.45em;
  font-size: 1.1em;
  margin: 0;
  cursor: pointer;
  line-height: 2em;
  :after {
    position: absolute;
    right: 1em;
    top: 0.2em;
    font-size: 1.8em;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
