import { CardStyles } from './Card.styles';

export const Card: React.FC<{children: React.ReactNode, title: string}> = ({title, children})=>{
  return (
    <CardStyles>
      <h1>{title}</h1>
      <p>{children}</p>
    </CardStyles>
  )
}