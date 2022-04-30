import styled from "styled-components";

export const WebsiteHeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #2d3436;

  div.centerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;

    h1 {
      font-family: "Source Code Pro", monospace;
      font-weight: lighter;
      text-transform: uppercase;
      font-size: 26px;
    }
  }
`;
