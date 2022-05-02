import { Card } from "../Card"
import { CardListStyles } from "./CardList.styles"
import { ITech, TechList } from '../TechList/index';


export const CardList: React.FC = ()=>{

  const backendEndTechs: Array<ITech> = [
    {
      name: 'Node.js',
      link: 'https://nodejs.org/en/docs/',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Typescript',
      link: 'https://www.typescriptlang.org/docs/',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Nestjs',
      link: 'https://docs.nestjs.com/',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    },
    {
      name: 'C# (Dotnet)',
      link: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
  ]

  const frontEndTechs: Array<ITech> = [
    {
      name: 'Html 5',
      link: 'https://dev.w3.org/html5/html-author/',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS 3',
      link: 'https://devdocs.io/css/',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'React.js',
      link: 'https://reactjs.org/docs/getting-started.html',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }
  ]

  return (
    <CardListStyles id="technologies">
      <Card title={'Backend Technologies'}>
        Here goes the list of backend languages i have already worked with:
        <TechList techList={backendEndTechs}/>

        Most used Languages on my <a target="_blank" href="https://github.com/rainanDeveloper">github</a>:
        <a target="_blank" href="https://github.com/rainanDeveloper">
          <img src="https://camo.githubusercontent.com/a0bf40ae98ed3cacb5feb6f3b0413ee307c0bea7fb3ad9d8cae24c0338394824/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7261696e616e446576656c6f706572266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874" alt="Rainan Miranda's most used languages" />
        </a>
      </Card>
      <Card title={'Frontend Technologies'}>
        Here goes the list of frontend languages i have already worked with:
        <TechList techList={frontEndTechs}/>
      </Card>
      <Card title={'Database and tools'}>
        
      </Card>
    </CardListStyles>
  )
}