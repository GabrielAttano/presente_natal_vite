import styled from "styled-components";
import * as C from '../../config/colors'

import manInSnow from '../../assets/images/backgrounds/main-in-snow.jpg'

export const body = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  
  @media (min-width: 992px) {    
    padding-bottom: 64px;
    gap: 32px;
  }
`
export const backgroundImage = styled.div`
  background-image: url(${manInSnow});
  width: 100%;
  height: 500px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 40%;
  background-position-x: 50%;
  
  @media (min-width: 992px) {
    padding-top: 80px;
    height: 700px;
  }
`
export const backgroundImage_text = styled.span`
  color: ${C.white};
  font-size: 80px;
  font-weight: 500;
  text-align: center;
  text-shadow: -2px 3px 8px rgba(0,0,0,0.47);

  @media (min-width: 992px) {
    font-size: 110px;
  }
`

export const createAccount_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${C.white};
  padding-bottom: 32px;
  
  @media (min-width: 992px) {
    padding-top: 32px;
    width: 80%;
    box-shadow: -4px 7px 40px -30px rgba(0,0,0,0.75);
  }
`

export const formWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  
  @media (min-width: 992px) {
    gap: 32px;
  }
`

export const form__input_wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const form__input_small_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 992px) {
    width: 45%;
  }
`

export const form__input_big_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const form__text = styled.span`
  font-size: 22px;
  color: ${C.black};
`

export const form__text_small = styled.span`
  font-size: 14px;
  color: ${C.bodyColor};
`

export const form__error_text = styled.span`
  font-size: 14px;
  color: ${C.errorColor};
`

export const form__input = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${C.black};
  font-weight: 500;

  ::placeholder {
    color: ${C.bodyColor};
    font-weight: 300;
  }
`

export const form__button = styled.button`
  width: 100%;
  height: 72px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 450;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${C.primary};

  &:focus,
  &:hover {
    background-color: ${C.primaryDarker};
  }
`

export const form__small_button = styled.button`
  width: 65%;
  height: 72px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${C.secondary};

  &:focus,
  &:hover {
    background-color: ${C.secondaryDarker};
  }

  @media (min-width: 992px) {
    width: 35%;
  }
`