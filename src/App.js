import React from "react";
import Layout from "./components/layout/Layout";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 20px;
`;
