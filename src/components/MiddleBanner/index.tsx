import { MiddleBannerStyles } from './MiddleBanner.styles';


export const MiddleBanner: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <MiddleBannerStyles>
      <img src="" alt="" />
      <h1>{children}</h1>
    </MiddleBannerStyles>
  );
}
