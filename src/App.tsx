import { GlobalStyles } from './themes/GlobalStyles';
import { MiddleBanner } from './components/MiddleBanner/index';
import { WebsiteHeader } from './components/WebsiteHeader/index';

function App() {

  return (
    <>
      <GlobalStyles/>
      <WebsiteHeader/>
      <MiddleBanner>Olá, meu nome é Rainan Miranda de Jesus e eu sou um desenvolvedor fullstack!</MiddleBanner>
    </>
  )
}

export default App
