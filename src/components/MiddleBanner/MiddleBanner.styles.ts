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
  margin-top: -82px;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  img {
    width: 110%;
    height: 110%;
    filter: blur(4px);
    object-fit: cover;
    background-image: url(${backgroundImg});
  }

  section {
    position: absolute;
    max-width: 1200px;
    text-align: center;
    text-shadow: 2px 2px 5px #131313;
    color: white;
  }

  h1 {
    font-size: 55px;
  }
`;
