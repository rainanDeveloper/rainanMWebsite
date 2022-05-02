import { MiddleBannerStyles } from './MiddleBanner.styles';


export const MiddleBanner: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <MiddleBannerStyles>
      <img src="" alt="" />
      <section>
        {children}
      </section>
    </MiddleBannerStyles>
  );
}
