import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { 
  setEmail as setEmailAction, 
  setPassword as setPasswordAction, 
  setUsername as setUsernameAction, 
  setFirstname as setFirstnameAction,
  setLastname as setLastnameAction,
  setAccountCreated, 
  login as loginAction
} from '../../features/user/userSlice'

import { saveEmail, saveFirstname, saveLastname, saveUsername } from '../../features/register/registerSlice'


import * as S from './styled'

function CreateAccount() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isRobot = useSelector((state) => state.user.isRobot)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const localUsername = useSelector((state) => state.register.username)
  const [username, setUsername] = useState(localUsername)
  const [isValidUsername, setIsValidUsername] = useState(true);


  const localFirstname = useSelector((state) => state.register.firstname)
  const [firstName, setFirstName] = useState(localFirstname)
  const [isValidFirstName, setIsValidFirstName] = useState(true);

  const localLastname = useSelector((state) => state.register.lastname)
  const [lastName, setLastName] = useState(localLastname)
  const [isValidLastName, setIsValidLastName] = useState(true);

  const localPassword = useSelector((state) => state.register.password)
  const [password, setPassword] = useState(localPassword)
  const [isValidPassword, setIsValidPassword] = useState(true);

  const localEmail = useSelector((state) => state.register.email)
  const [email, setEmail] = useState(localEmail)
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      toast.error('Você já está logado.')
      navigate('/')
    }
  }, [])

  const handleSubmit = (e) => {

    
    dispatch(saveUsername(username))
    dispatch(saveFirstname(firstName))
    dispatch(saveLastname(lastName))
    dispatch(saveEmail(email))
    dispatch(saveLastname(lastName))

    if (!isValidForm()) {
      e.preventDefault()
      return
    }

    if (isRobot) {
      e.preventDefault()
      toast.error('Você precisa confirmar que não é um robô!')
      console.log('Must confirm that you arent a robot')
      return
    }
    
    dispatch(setFirstnameAction(firstName))
    dispatch(setLastnameAction(lastName))
    dispatch(setEmailAction(email))
    dispatch(setPasswordAction(password))
    dispatch(setUsernameAction(username))
    dispatch(setAccountCreated(true))

    toast.success('Conta criada com sucesso, basta fazer login!')
    navigate('/')
    console.log('Account created, login')
  }

  const handleIsRobotClick = (e) => {
    e.preventDefault()

    if (isRobot) {
      
      toast.info('Uma força mágica impede você de clicar nesse botão! Que tão investigar mais?')
      console.log('A magical force prevents you from clicking this button!')
      navigate('/visual-novel')
    } else {
      console.log('Você não é um robô!')
    }
  }
    
  const isValidForm = () => {
    const validFirstName = validateFirstName()
    const validLastName = validateLastName()
    const validUsername = validateUsername()
    const validPassword = validatePassword()
    const validEmail = validateEmail()

    setIsValidFirstName(validFirstName)
    setIsValidLastName(validLastName)
    setIsValidUsername(validUsername)
    setIsValidPassword(validPassword)
    setIsValidEmail(validEmail)
    
    return validFirstName && validLastName && validUsername && validPassword && validEmail
  }

  const validateFirstName = () => {

    if (firstName === '') return false

    const normalizedFirstName = firstName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    if (normalizedFirstName !== 'julia') {
      console.log('First name must be "Julia" to proceed')
      toast.error('O nome não confere... Apenas a Julia pode ter acesso aos presentes.')
      return false
    }

    return true
  }

  const validateLastName = () => {

    if (lastName === '') return false

    return true
  }

  const validateUsername = () => {

    if (username === '') return false
    if (username.length < 8) return false

    return true
  }

  const validatePassword = () => {

    if (password === '') return false
    if (password.length < 8) return false

    return true
  }

  const validateEmail = () => {
    if (email === '') return false

    return true
  }

  return (
    <S.body>

      <S.backgroundImage >
        <S.backgroundImage_text>Dê início a sua jornada.</S.backgroundImage_text>
      </S.backgroundImage>

      <S.createAccount_container>
        <S.formWrapper>
          <S.form>

            <S.form__input_wrapper>

              <S.form__input_small_container className='first-name'>
                <S.form__text>Primeiro nome:</S.form__text>
                <S.form__input type={'text'} placeholder={'Gabriel'} onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
                {
                  !isValidFirstName &&
                  <S.form__error_text>Você deve preencher este campo corretamente.</S.form__error_text>
                }
              </S.form__input_small_container>

              <S.form__input_small_container className='last-name'>
                <S.form__text>Último nome:</S.form__text>
                <S.form__input type={'text'} placeholder={'de Sá'} onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
                {
                  !isValidLastName &&
                  <S.form__error_text>Você deve preencher este campo.</S.form__error_text>
                }
              </S.form__input_small_container>

            </S.form__input_wrapper>

            <S.form__input_wrapper>

              <S.form__input_small_container className='user-name'>
                <S.form__text>Nome de usuário:</S.form__text>
                <S.form__input type={'text'} placeholder={'gabrielsa08'} onChange={(e) => {setUsername(e.target.value)}} value={username}/>
                {
                  !isValidUsername &&
                  <S.form__error_text>Você deve preencher este campo com um nome de usuário com 8 caracteres ou mais.</S.form__error_text>
                }
              </S.form__input_small_container>

              <S.form__input_small_container className='password'>
                <S.form__text>Senha:</S.form__text>
                <S.form__input type={'password'} onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                {
                  !isValidPassword &&
                  <S.form__error_text>Você deve preencher este campo com uma senha com 8 caracteres ou mais.</S.form__error_text>
                }
              </S.form__input_small_container>

            </S.form__input_wrapper>

            <S.form__input_wrapper>

              <S.form__input_big_container className='email'>
                <S.form__text>Email:</S.form__text>
                <S.form__input type={'email'} placeholder={'gabrielsa08@gmail.com'} onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                {
                  !isValidEmail &&
                  <S.form__error_text>Você deve preencher este campo.</S.form__error_text>
                }
              </S.form__input_big_container>

            </S.form__input_wrapper>

            <S.form__input_wrapper>

              <S.form__input_big_container>
                <S.form__text_small>
                  Seus dados serão armazenados localmente no seu navegador apenas para o funcionamento do site.
                </S.form__text_small>
                <S.form__text_small>
                  Nenhuma informação é compartilhada com terceiros.
                </S.form__text_small>
              </S.form__input_big_container>

            </S.form__input_wrapper>

            <S.form__input_wrapper>

              <S.form__input_big_container>
                <S.form__input_big_container>
                  <S.form__small_button type='button' onClick={handleIsRobotClick}>Confirme que você é humano</S.form__small_button>
              </S.form__input_big_container>
              </S.form__input_big_container>

            </S.form__input_wrapper>

            <S.form__input_wrapper>

              <S.form__input_big_container>
                <S.form__button type='submit' onClick={handleSubmit}>Criar conta</S.form__button>
              </S.form__input_big_container>

            </S.form__input_wrapper>

          </S.form>
        </S.formWrapper>
      </S.createAccount_container>
    </S.body>
  )
}

export default CreateAccount