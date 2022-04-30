import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0;
    margin: 0;

    a {
      padding: 8px 10px;
      text-decoration: none;
      color: #222;

      :hover {
        background-color: rgba(125, 125, 125, 0.2);
      }
    }
  }
`;
