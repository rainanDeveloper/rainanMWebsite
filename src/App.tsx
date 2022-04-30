import { GlobalStyles } from './themes/GlobalStyles';
import { MiddleBanner } from './components/MiddleBanner/index';
import { WebsiteHeader } from './components/WebsiteHeader/index';

function App() {

  return (
    <>
      <GlobalStyles/>
      <WebsiteHeader/>
      <MiddleBanner/>
    </>
  )
}

export default App
