import { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from "react-router-dom";

import * as S from './styled'
import { login } from '../../features/user/userSlice'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const desiredEmail = useSelector((state) => state.user.email)
  const desiredPassword = useSelector((state) => state.user.password)
  const isAccountCreated = useSelector((state) => state.user.accountCreated)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (isLoggedIn) {
      toast.error('Você já está logado.')
      navigate('/')
    }
  }, [])

  const handleSubmit = (e) => {
    if (!isAccountCreated) {
      toast.error('Você ainda não criou uma conta!')
      console.log('Account not created yet.')
      return
    }

    if (email !== desiredEmail ) {
      toast.error('O email não confere com o que você usou para se registrar!')
      console.log('Email doesnt match the one used when registering.')
      return
    }

    if (password !== desiredPassword) {
      toast.error('A senha não confere com a que você usou para se registrar!')
      console.log('Password is wrong.')
      return
    }
    
    console.log('Loggin in')
    toast.success(`Seja bem-vinda!`)
    dispatch(login())
    navigate('/')
  }

  const handleCreateAccountClick = (e) => {
    e.preventDefault()

    if (isAccountCreated) {
      toast.info('Parece que você já criou uma conta.')
    } else {
      navigate('/create-account')
    }
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()

    if (!isAccountCreated) {
      toast.error('Parece que você ainda não criou uma conta. Que tal começar lá?')
      return
    }

    toast.info(`Seu email é '${desiredEmail}' e sua senha '${desiredPassword}'`)
  }

  return (
    <S.body>
      <S.loginContainer>
        <S.formWrapper>
          <S.formTitle>Seja bem-vindo de volta!</S.formTitle>
          <S.form>
            <S.input  type={'email'} placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} onSubmit={handleSubmit}/>
            <S.input  type={'password'} placeholder='Senha' onChange={(e) => {setPassword(e.target.value)}} onSubmit={handleSubmit}/>
            <S.button type='button' onClick={handleSubmit}>Entrar</S.button>
          </S.form>
          <S.linksWrapper>
            <button type='button' onClick={handleForgotPassword}><S.link>Esqueceu sua senha?</S.link></button>
            <button type='button' onClick={handleCreateAccountClick}><S.link>Criar conta</S.link></button>
          </S.linksWrapper>
        </S.formWrapper>
      </S.loginContainer>
    </S.body>
  )
}

export default Login