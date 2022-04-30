
import { MenuStyles } from './Menu.styles';

interface IPropsMenu {
  itemList: IMenuItem[]
}

export interface IMenuItem {
  title: string
  link: string
}

export const Menu: React.FC<IPropsMenu> = ({itemList})=> {
  return <MenuStyles>
  {itemList.map(i=>(
    <li>
      <a href={i.link}>{i.title}</a>
    </li>
  ))}
</MenuStyles>
}