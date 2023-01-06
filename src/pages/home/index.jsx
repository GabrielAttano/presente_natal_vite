import * as S from './styled'
import * as C from '../../config/colors'

import christmasImage from '../../assets/images/backgrounds/artboard-studio-B40ztSGQTZY-unsplash.jpg'

function Home() {

  return (
    <S.body className='body'>
      <S.backgroundImage>
        <S.backgroundImage_text>
        Resgate o seu presente aqui.
        </S.backgroundImage_text>
      </S.backgroundImage>
      <S.bodySection>
        
        <S.bodySection_containerBig>
          <S.bodySection_containerSmall>
            <S.hr/>
            <S.bodySection_title>
              Seu presente a um clique de distância
            </S.bodySection_title>
          </S.bodySection_containerSmall>
        </S.bodySection_containerBig>
        
      </S.bodySection>

      <S.bodySection>
        <S.bodySection_containerSmall>
          <S.bodySection_subtitle>Sobre nós</S.bodySection_subtitle>
          <S.bodySection_text textAlign={'left'}>
            Nossa equipe trabalha dia e noite para ter certeza que você, o usuário, receba os melhores presentes sem dificuldade! <br/>
            Totalizando um total de '1' membro(s), acreditamos que podemos revolucionar a forma como presentes são entregues, resolvendo 
            problemas que não existem!
          </S.bodySection_text>
        </S.bodySection_containerSmall>

        <S.bodySection_containerSmall>
          <S.bodySection_img src={christmasImage}/>
        </S.bodySection_containerSmall>

        <S.bodySection_containerSmall>
          <S.bodySection_subtitle>Nossas features</S.bodySection_subtitle>
          <S.bodySection_text textAlign={'left'}> 
            Enquantos alguns acham que uma etapa a mais no processo de presentear alguém é ineficiente e desnecessário, nós da 
            equipe Ajudantes do Noel pregamos o contrário. <br/>
            Graças a navegação intuitíva e responsiva, o usuário tem uma experiência tranquila e acima de tudo, rápida. Rapidez que se deve ao
            trabalho realizado pela equipe na área de criar conta, um processo que não dura mais do que 30 segundos, e promete revolucionar
            a industria.
          </S.bodySection_text>
        </S.bodySection_containerSmall>
      </S.bodySection>

    </S.body>
  )
}

export default Home