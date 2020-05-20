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
        this.setState({ newsData: data })
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
        this.setState({ newsData: data })
      );
    } else {
      searchByCategory(category).then((data) =>
        this.setState({ newsData: data })
      );
    }
  }

  render() {
    return (
      <CardWrapper>
        {this.state.newsData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </CardWrapper>
    );
  }
}

export default MainPage;

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
