import { Fragment } from 'react';
import { WebsiteHeader } from './components/WebsiteHeader/WebsiteHeader.styled';
import { GlobalStyles } from './themes/GlobalStyles';
import { Menu } from './components/Menu/Menu.styled';

function App() {

  return (
    <Fragment>
      <GlobalStyles/>
      <WebsiteHeader>
        <div className="centerContainer">
          <h1>Rainan Miranda</h1>
          <Menu>
            <li>
              <a href="#">Tecnologias</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </Menu>
        </div>
      </WebsiteHeader>
    </Fragment>
  )
}

export default App
