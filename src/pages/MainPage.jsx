import React from "react";
import {
  searchByCategory,
  searchByDate,
  searchByQuery,
} from "../services/services";
import styled from "styled-components";
import Card from "../components/Card";
import Moment from "moment";
import { categories } from "../const/categories";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoading: true,
    };
  }

  async componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;
    if (
      this.props.category === categories[0].id &&
      prevProps.match.params.query !== this.props.match.params.query
    ) {
      this.setState({ news: [], isLoading: true });
      searchByQuery(params.query).then((data) =>
        this.setState({ newsData: data, isLoading: false })
      );
    }
  }

  async componentDidMount() {
    const {
      match: { params },
      category,
    } = this.props;
    if (category === -1) {
      searchByQuery(params.query).then((data) =>
        this.setState({ newsData: data, isLoading: false })
      );
    } else if (category === 0) {
      searchByCategory(1).then((data) =>
        this.setState({ newsData: data, isLoading: false })
      );
    } else {
      searchByCategory(category).then((data) =>
        this.setState({ newsData: data, isLoading: false })
      );
    }
  }

  render() {
    return this.state.isLoading ? (
      <LoaderWrapper>
        <BounceLoader
          css={override}
          color="#fb2865"
          loading={this.state.isLoading}
        />
      </LoaderWrapper>
    ) : (
      <CardWrapper>
        {this.state.newsData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </CardWrapper>
    );
  }
}

export default MainPage;

const LoaderWrapper = styled.div`
  width: 100%;
`;

const override = css`
  display: block;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 35px;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1108px;
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
