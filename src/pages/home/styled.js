import styled from "styled-components"
import * as C from '../../config/colors'

import christmasBackground from '../../assets/images/backgrounds/christmas-background.jpg'

export const body = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 60px;
`

export const backgroundImage = styled.div`
  background-image: url(${christmasBackground});
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const backgroundImage_text = styled.span`
  color: ${C.white};
  font-size: 80px;
  font-weight: 500;
  text-align: center;
  text-shadow: -2px 3px 8px rgba(0,0,0,0.47);
  @media (min-width: 992px) {
    font-size: 120px;
  }
`

export const bodySection = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  background-color: ${C.bodyBackground};
  align-items: center;
  gap: 12px;

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
    /* height: 300px; */
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
`
export const bodySection_title = styled.h2`
  color: ${(props) => props.textColor ? props.textColor : C.black};
`