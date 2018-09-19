import React from "react";
import styled from "styled-components";
import { colors } from "./Components/Colors";
const { red, blue, grey, lightBlue } = colors;

const myRed = "#fb595d";
const myBlue = "#9FCDE6";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 6fr 1fr;
  grid-template-rows: auto minmax(1300px, 1fr) auto;
  grid-template-areas:
    "Header Header Header Header"
    "Container Container Container Container"
    "Footer Footer Footer Footer";
  text-align: center;
  background: ${lightBlue};
  .Header {
>>>>>>> 0c8e9b58b5ce7dbbf06b527ca18f489a7586305c
    grid-area: Header;
  }
  .Container {
    grid-area: Container;
  }
  .Footer {
    grid-area: Footer;
  }
`;
