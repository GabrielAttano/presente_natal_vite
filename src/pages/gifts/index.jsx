import * as S from './styled'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
function Gifts() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Você precisa estar logado para acessar o presente!')
      navigate('/')
    }
  }, [])

  return (
    <S.body>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_title>
            Você conseguiu! 
          </S.bodySection_title>
        </S.bodySection_containerBig>
      </S.bodySection>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_text>
            A ideia original era bem simples: Você ia fazer login, acessar essa página, e diversos presentes
            poderiam ser resgatados. Já tinha tudo pensado: Alguns seriam engraçadinhos: Poderia resgatar um cupom
            de <b>Suporte técnico vitalício</b>, onde eu estaria disponibilizando meus serviços para você para sempre. <br/>
            Também queria colocar um presente de verdade aqui, depois que você me deu aquela camisa linda eu percebi que
            um site não é exatamente algo que você pode usar por aí. Como você vai esfregar na cara de todo mundo meu presente
            se ninguém mais vai ver? 
          </S.bodySection_text>
        </S.bodySection_containerBig>
      </S.bodySection>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_text>
            Então eu <b>abandonei a ideia original</b>. Foi uma decisão difícil, mas por um bom motivo: Eu não ia conseguir
            pensar em algo a altura do resto do site. Horas e mais horas de trabalho, escrevendo a história, configurando rotas,
            criando páginas... E tudo isso para ganhar algumas lembrancinhas no final? Não. Se eu me esforcei tanto para fazer o site,
            há apenas uma conclusão lógica:<br/>
            O presente de verdade é o site.<br/><br/>
          </S.bodySection_text>
        </S.bodySection_containerBig>
      </S.bodySection>

      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_subtitle>Uma carta ao meu amor</S.bodySection_subtitle>
          <S.bodySection_text textAlign={'left'}>
            Então eu vou fazer algo diferente, usar essa parte para fazer o que eu faço de melhor. Elogiar a melhor namorada do mundo. <br/><br/>
            Primeiro de tudo, obrigado por existir. É engraçado como as coisas acontecem, a gente já falou sobre isso tantas vezes mas é 
            simplesmente inacreditável. Como uma mensagem que falava que eu ia chutar o joelho do Bolsonaro me fez encontrar
            o amor da minha vida? E você sabe bem o que eu queria naquela época: Absolutamente nada. Tava só procurando alguém para levar para casa e provavelmente
            nunca mais conversar de novo. <br/>

            Mas não foi isso que aconteceu. Você apareceu e logo no primeiro encontro já me surpreendeu: Uma nerdola! Exatamente, alguém que doou
            350 horas da vida para assistir um grupo de piratas procurando um tesouro fantástico, que conseguiu burlar o limite de horas
            imposto pelo pai para jogar mais Grand Chase, alguém que me escutou falando que o carro parecia a fornalha infernal e riu... <br/>

            Quanto mais a gente se encontrava, mais eu queria. Mas eu não podia aceitar. Tinha prometido para mim mesmo
            que agora o foco era <b>eu</b>, não podia perder logo na primeira pessoa que eu comecei a conversar do aplicativo que não podemos falar o nome.
            Até tentei fugir, tentei conversar menos, mas não adiantou, porque nessa história até você fez algo que não costuma fazer: Continuou conversando comigo mesmo
            quando eu tentei não demonstrar interesse. <br/>

            Então, depois de um tempo eu percebi: <b>Estava apaixonado.</b> Procurar outras pessoas não fazia mais sentido, sempre que ia dormir
            minha cabeça não conseguia pensar em qualquer coisa além de você, ficava lembrando dos nossos encontros e sorrindo para as paredes.
            E foi aí que eu decidi, não podia perder você. <br/>

            Depois disso a gente teve aquela conversa no drive-in e o resto é história. Simples assim. Uma mensagem engraçadinha no Tin***
            começou um efeito dominó e antes de me dar conta, você se tornou uma parte importantíssima de mim. <br/><br/>

            E agora, chegamos no presente. Não <b>O presente</b>, e sim no presente, tempo. Nada mudou, as emoções intensas que eu sentia quando comecei
            a gostar de você estão mais fortes do que nunca. Fiquei viciado no seu cheiro, no jeito que você fala 'hum', fascinado pela quantidade de informações
            que você guarda nessa sua cabeça, no seu beijo, na sensação de estar no paraíso toda vez que a gente se abraça e fica grudadinho... E quero proteger isso. <br/>

            A gente só começou a namorar (oficialmente) a um mês, mas o tanto que minha vida melhorou desde que a gente se conheceu não tá escrito. Você sempre teve
            o cuidado para lidar com meu jeitinho, e eu percebo todo o esforço que você faz e fez para isso. Você é a pessoa mais inteligente e esforçada, 
            mais gostosa, mais tudo que eu já conheci. E como eu falei antes, vou proteger isso. <br/>
            <br/>
            
            Prometo para você meu amor que vou fazer de tudo para tornar você a mulher mais feliz do mundo, enquanto você estiver do meu lado eu não tenho medo
            de absolutamente nada (Tirando brinquedos radicais) e estou disposto a fazer qualquer coisa para que a gente continue assim, juntinhos e felizes. <br/><br/>

            Espero que tenha gostado do presente, não decidi ainda se a cartinha foi melhor que minha outra ideia, mas pelo menos assim eu posso dizer isso aqui:
            <b> EU TE AMO MAIS DO QUE TUDO</b>, e, por favor, vamos criar uma meta para 2023 de assistir um filme todo sem pausas para safadezas? Estamos condicionando nosso cérebro! E se
            a gente for assistir com mais alguém e não conseguir se segurar? 
            <br/>
            <br/>

            De seu amor,<br/>
            Gabriel Sá
          </S.bodySection_text>
          
          
        </S.bodySection_containerBig>
      </S.bodySection>
    </S.body>
  )
}

export default Gifts