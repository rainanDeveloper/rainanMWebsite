import styled from "styled-components";

export const WebsiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.centerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 10px;

    h1 {
      font-family: "Source Code Pro", monospace;
      font-weight: lighter;
      text-transform: uppercase;
    }
  }
`;
