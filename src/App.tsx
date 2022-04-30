import { Fragment } from 'react';
import { WebsiteHeader } from './components/WebsiteHeader/WebsiteHeader.styled';
import { GlobalStyles } from './themes/GlobalStyles';

function App() {

  return (
    <Fragment>
      <GlobalStyles/>
      <WebsiteHeader>
        <div className="centerContainer">
          <h1>Rainan Miranda</h1>
        </div>
      </WebsiteHeader>
    </Fragment>
  )
}

export default App
