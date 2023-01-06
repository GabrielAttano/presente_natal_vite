import styled from "styled-components"
import * as C from '../../config/colors'

import christmasBackground from '../../assets/images/backgrounds/christmas-background.jpg'


export const body = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  padding-bottom: 60px;
  @media (min-width: 992px) {
    gap: 50px;
  }
`

export const backgroundImage = styled.div`
  background-image: url(${christmasBackground});
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-position-x: 50%;
  background-position-y: 40%;
`

export const backgroundImage_text = styled.span`
  color: ${C.white};
  font-size: 60px;
  font-weight: 500;
  text-align: center;
  text-shadow: -2px 3px 8px rgba(0,0,0,0.47);
  @media (min-width: 992px) {
    font-size: 100px;
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

export const bodySection_img = styled.img`
  width: 100%;
  height: 100%;
`

export const hr = styled.hr`
  border: 3px solid ${C.primary};
  width: 25%;
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

export const bodySection_containerSmall_image = styled.img`
  width: 100%;
`