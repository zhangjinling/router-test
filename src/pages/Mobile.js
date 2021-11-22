import React from "react";
import styled from "styled-components";
export const Wrapper = styled.div`
  .square {
    width: 75px;
    height: 75px;
    display: inline-block;
    border: 1px solid red;
    font-size: 38px;
    color: red;
  }
  .left {
    width: 325px;
    display: inline-block;
    border: 1px solid blue;
    height: 75px;
  }
`;
export default function Mobile() {
  return (
    <Wrapper>
      <span className="square">square</span>
      <span className="left">left</span>
    </Wrapper>
  );
}
