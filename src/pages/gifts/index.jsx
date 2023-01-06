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
          <S.bodySection_text>
            SEGREDO
          </S.bodySection_text>
        </S.bodySection_containerBig>
      </S.bodySection>
    </S.body>
  )
}

export default Gifts