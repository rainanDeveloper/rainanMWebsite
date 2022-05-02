import styled from "styled-components";

export const TechListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;

  a.tech {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    text-decoration: none;
    color: #dcdde1;
    margin-bottom: 15px;
  }

  a.tech img {
    height: 50px;
  }
`;
