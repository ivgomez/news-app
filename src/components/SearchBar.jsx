import React from "react";
import styled from "styled-components";

class SearchBar extends React.Component {
  state = { query: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { query } = this.state;
    history.push(`/search/${query}`);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <SearchBarWrapper>
        <div>News feeds</div>
        <SearchBarComponentWrapper>
          <form onSubmit={this.handleSubmit}>
            <SearchBarInputWrapper
              type="text"
              name="query"
              placeholder="Buscar"
              onChange={this.handleChange}
            />
          </form>
          <SearchBarIconWrapper href="#">
            <svg
              onClick={this.handleSubmit}
              className="text-gray-3 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="12px"
              height="12px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </SearchBarIconWrapper>
        </SearchBarComponentWrapper>
      </SearchBarWrapper>
    );
  }
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 50px;
  background-color: #fb2865;
  font-size: 16px;
  color: white;
`;

const SearchBarComponentWrapper = styled.div`
  position: relative;
  padding: 0;
`;

const SearchBarInputWrapper = styled.input`
  background-color: white;
  border-radius: 5px;
  height: 40px;
  padding: 5px;
`;

const SearchBarIconWrapper = styled.a`
  position: absolute;
  margin-top: -27px;
  margin-right: 10px;
  right: 0;
  padding: 0 5px;
`;
