import { useSelector } from 'react-redux'
import { FaLinkedinIn, FaGithub, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

import * as S from './styled'
import * as C from '../../config/colors'
import { toast } from 'react-toastify';

function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const handleInvalidClick = (e) => {
    e.preventDefault()
    toast.info('Você nos pegou, ainda estamos desenvolvendo essa página...');
  }

  return (
    <S.header>
      <S.linksBar>
        <S.linksContainer gap='8px'>
          <S.link onClick={handleInvalidClick}>FAQ</S.link>
          <S.linkSeparator>|</S.linkSeparator>
          <S.link onClick={handleInvalidClick}>Suporte</S.link>
        </S.linksContainer>
        <S.linksContainer gap='28px'>
          <a href='https://github.com/GabrielAttano/'>
            <FaGithub fill={C.white} size={30}/>
          </a>
          <a href='https://www.linkedin.com/in/gabriel-s%C3%A1-57995316a/'>
            <FaLinkedinIn fill={C.white} size={30}/>
          </a>
        </S.linksContainer>
      </S.linksBar>
        <S.anchor>
          <S.nav>
            <S.nav_ul>
              {isLoggedIn ? 
                <FaUser size={32}/> :
                <Link to={"/Login"} style={{ textDecoration: 'none' }}><S.nav_li>Login</S.nav_li></Link>
              }
              <Link to={"/"} style={{ textDecoration: 'none' }}><S.logo>iPresentes</S.logo></Link>
              <Link to={"/gifts"} style={{ textDecoration: 'none' }}><S.nav_li>Presente</S.nav_li></Link>
            </S.nav_ul>

          </S.nav>
        </S.anchor>
    </S.header>
  )
}

export default Header