import styled from "styled-components";
import * as C from '../../config/colors'

export const header = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
`

export const linksBar = styled.div`
  display: none;

  @media (min-width: 768px) {
    background-color: ${C.primary};
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 140px;
  }
  @media (min-width: 992px) {
    height: 100%;
  }
`

export const linksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.gap};
  height: 100%;
`

export const link = styled.span`
  color: ${C.white};
  font-size: 20px;
  text-decoration: inherit;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${C.white};
  }
`

export const logo = styled.span`
  color: ${C.primary};
  font-size: 45px;
  text-decoration: inherit;
  font-weight: 700;
`

export const linkSeparator = styled.span`
  color: ${C.white};
  font-size: 20px;
`

export const HeaderLinks = styled.a`
  color: ${C.white};
  font-size: 24px;
  font-weight: bold;
`

export const navContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const anchor = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 992px) {
    height: 0;
  }
`

export const nav = styled.nav`
  position: relative;
  width: 100%;
  background-color: ${C.white};
  height: 100%;
  font-weight: 400;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1;

  @media (min-width: 992px) {
    position: absolute;
    width: 75%;
    height: 88px;
    border-radius: 60px;
    left: 0;
    right: 0;
    top: -40px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const nav_ul = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const nav_li = styled.li`
  margin: 0 0; 
`