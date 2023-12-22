import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './style'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Project
