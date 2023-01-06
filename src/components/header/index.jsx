import { useSelector } from 'react-redux'
import { FaLinkedinIn, FaGithub, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

import * as S from './styled'
import * as C from '../../config/colors'

function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <S.header>
      <S.linksBar>
        <S.linksContainer gap='8px'>
          <Link to={"/faq"} style={{ textDecoration: 'none' }}><S.link>FAQ</S.link></Link>
          <S.linkSeparator>|</S.linkSeparator>
          <Link to={"/suporte"} style={{ textDecoration: 'none' }}><S.link>Suporte</S.link></Link>
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