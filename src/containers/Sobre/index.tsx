import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nulla
      consectetur sequi esse, corporis beatae nobis excepturi molestias, ex,
      accusamus nisi eius deserunt nam minima unde quaerat perspiciatis iusto
      facilis?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=brunois10&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=brunois10&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default About
