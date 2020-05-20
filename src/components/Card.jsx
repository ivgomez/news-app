import React from "react";
import styled from "styled-components";
import Moment from "moment";

const Card = (props) => {
  const { data } = props;
  const { title, img_url, date, url } = data;
  return (
    <CardWrapper>
      <HeaderWrapper>
        <ImgWrapper style={{ backgroundImage: `url(${img_url})` }} />
      </HeaderWrapper>

      <BodyWrapper>
        <H3>{title}</H3>
        <BottonWrapper>
          <LabelWrapper>{Moment(date).format("YYYY-MM-DD")}</LabelWrapper>
          <AHref href={url} target="_blank" rel="noopener noreferrer">
            Ver mas
          </AHref>
        </BottonWrapper>
      </BodyWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  border-radius: 5px;
  background: white;
  border: 1px solid #ededf0;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: all ease 150ms;
  width: 100%;
`;

const ImgWrapper = styled.div`
  height: 200px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  background-size: cover;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  min-height: 63px;
  color: #3b4359;
  -webkit-transition: color 150ms ease;
  transition: color 150ms ease;
`;

const HeaderWrapper = styled.header``;

const BodyWrapper = styled.div`
  padding: 16px 20px;
`;

const BottonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #82899e;
`;
const LabelWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AHref = styled.a`
  text-decoration: none;
  color: #82899e;
`;
