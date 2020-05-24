import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Moment from "moment";
import { categories } from "../const/categories";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import {
  getNewsByCategory,
  getNewsByDate,
  getNewsByQuery,
} from "../actions/category.action";
import { connect } from "react-redux";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.getNewsByCategory = this.props.getNewsByCategory;
    this.getNewsByDate = this.props.getNewsByDate;
    this.getNewsByQuery = this.props.getNewsByQuery;
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;
    if (
      this.props.category === categories[0].id &&
      prevProps.match.params.query !== this.props.match.params.query
    ) {
      this.getNewsByQuery(params.query);
    }
  }

  componentDidMount() {
    const {
      match: { params },
      category,
    } = this.props;
    if (category === 7) {
      this.getNewsByQuery(params.query);
    } else if (category === 0) {
      this.getNewsByDate(Moment(new Date()).format("YYYY-MM-DD"));
    } else {
      this.getNewsByCategory(category);
    }
  }

  render() {
    const { news, isLoading } = this.props;
    return isLoading ? (
      <LoaderWrapper>
        <BounceLoader css={override} color="#fb2865" loading={isLoading} />
      </LoaderWrapper>
    ) : (
      <CardWrapper>
        {news?.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </CardWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getNewsByCategory,
  getNewsByDate,
  getNewsByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

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
