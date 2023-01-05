import * as S from './styled'
import * as C from '../../config/colors'

function Home() {
  const handleCarouselClick = () => {

  }

  return (
    <S.body className='body'>
      <S.backgroundImage>
        <S.backgroundImage_text>
        O presente perfeito.
        </S.backgroundImage_text>
      </S.backgroundImage>

      <S.bodySection>

        <S.bodySection_containerSmall>
          <S.bodySection_title>Crie uma conta</S.bodySection_title>
          <S.bodySection_text textColor={C.black}>
            Crie uma conta para ter acesso completo as funcionalidades do site.
          </S.bodySection_text>
        </S.bodySection_containerSmall>

        <S.bodySection_containerSmall>
          <S.bodySection_title>Resgate seus presentes</S.bodySection_title>
          <S.bodySection_text textColor={C.black}>
            Com uma conta em mãos, basta acessar a central de presentes e resgatar todos os presentes que te chamam a atenção.
          </S.bodySection_text>
        </S.bodySection_containerSmall>

        <S.bodySection_containerSmall>
          <S.bodySection_title>Segurança</S.bodySection_title>
          <S.bodySection_text textColor={C.black}>
            Todos os dados necessários para o funcionamento da página são armazenados localmente. Não precisa se preocupar com suas informações vazando!
          </S.bodySection_text>
        </S.bodySection_containerSmall>

      </S.bodySection>

      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_text>
            hello camarada
          </S.bodySection_text>
        </S.bodySection_containerBig>

      </S.bodySection>
    </S.body>
  )
}

export default Home