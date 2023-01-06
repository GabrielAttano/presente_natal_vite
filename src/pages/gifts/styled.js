import styled from "styled-components";
import * as C from '../../config/colors'

export const body = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 500px;
  gap: 60px;
  
  @media (min-width: 992px) {
    gap: 100px;
    padding-top: 64px;
    height: 700px;
  }
`

export const bodySection = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  background-color: ${C.bodyBackground};
  align-items: flex-start;
  gap: 22px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
  }
`

export const bodySection_containerSmall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  text-align: center;

  @media (min-width: 992px) {
    width: 33%;
  }  
`

export const bodySection_containerBig = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  text-align: center;
`

export const bodySection_text = styled.span`
  color: ${(props) => props.textColor ? props.textColor : C.black};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
`
export const bodySection_subtitle = styled.h2`
  color: ${(props) => props.textColor ? props.textColor : C.black};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
`

export const bodySection_title = styled.h1`
  color: ${(props) => props.textColor ? props.textColor : C.black};
  text-align: ${(props) => props.textAlign ? props.textAlign : 'center'};
  font-size: 36px;
`