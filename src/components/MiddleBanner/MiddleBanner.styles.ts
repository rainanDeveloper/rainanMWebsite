import styled from "styled-components";
import backgroundImg from "../../assets/banner.jpg";

export const MiddleBannerStyles = styled.main`
  display: flex;
  z-index: -1;
  position: relative;
  margin-top: -42px;
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
`;
