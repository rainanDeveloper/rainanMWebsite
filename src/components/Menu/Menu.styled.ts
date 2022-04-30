import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0;
  font-size: 24px;

  li {
    display: flex;
    padding: 0;
    margin: 0;

    a {
      padding: 8px 10px;
      margin: 0px 2px;
      text-decoration: none;
      color: inherit;

      &:hover {
        background-color: rgba(125, 125, 125, 0.2);
      }
    }
  }
`;
