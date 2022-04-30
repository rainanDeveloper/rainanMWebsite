import { Menu } from "../Menu";
import { WebsiteHeaderStyles } from "./WebsiteHeader.styles";
import { IMenuItem } from '../Menu/index';

export function WebsiteHeader () {
  const menuItens: IMenuItem[] = [
    {
      title: 'Tecnologias',
      link: '#'
    },
    {
      title: 'Portfolio',
      link: '#'
    },
    {
      title: 'Contato',
      link: '#'
    }
  ]

  return (
    <WebsiteHeaderStyles>
      <div className="centerContainer">
        <h1>Rainan Miranda</h1>
        <Menu itemList={menuItens}/>
      </div>
    </WebsiteHeaderStyles>
  )
}