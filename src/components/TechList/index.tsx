import { TechListStyles } from "./TechList.styles"

export interface ITech {
  name: string
  link: string
  imageUrl: string
}

interface TechListProps {
  techList: Array<ITech>
}

export const TechList: React.FC<TechListProps> = ({techList})=>{
  return (
    <TechListStyles>
      {
      techList.map(tech => {
        return (
          <a target="_blank" href={tech.link} className="tech">
              <img alt={tech.name} src={tech.imageUrl} />
              {tech.name}
            </a>
          )
        })
      }
    </TechListStyles>
  )
}