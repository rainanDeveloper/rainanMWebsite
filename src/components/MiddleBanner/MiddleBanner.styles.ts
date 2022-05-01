import styled from "styled-components";
import backgroundImg from "../../assets/banner.jpg";

export const MiddleBannerStyles = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
  position: relative;
  margin-top: -142px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 110%;
    filter: blur(4px);
    object-fit: cover;
    background-image: url(${backgroundImg});
  }

  h1 {
    position: absolute;
    max-width: 600px;
    text-align: center;
    font-size: 35px;
    color: white;
    margin-bottom: 200px;
    text-shadow: 2px 2px 5px #131313;
  }
`;
