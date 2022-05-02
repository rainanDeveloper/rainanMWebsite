import { GlobalStyles } from './themes/GlobalStyles';
import { MiddleBanner } from './components/MiddleBanner/index';
import { WebsiteHeader } from './components/WebsiteHeader/index';
import { CardList } from './components/CardList';

function App() {

  return (
    <>
      <GlobalStyles/>
      <WebsiteHeader/>
      <MiddleBanner>
        <h1>Hello World! My name is Rainan Miranda</h1>
        <p>I am a Fulstack developer, with a large backend domain</p>
      </MiddleBanner>
      <CardList/>
    </>
  )
}

export default App
