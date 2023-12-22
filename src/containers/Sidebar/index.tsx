import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Description, BotaoTema, SidebarContainer } from './style'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Bruno Guimarães</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        brunois10
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
