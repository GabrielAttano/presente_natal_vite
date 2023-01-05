import styled from "styled-components"
import * as C from '../../config/colors'

import christmasTree from '../../assets/images/backgrounds/christmas_tree.jpg'

export const body = styled.div`
  background-color: ${C.bodyBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 700px;
  padding-top: 24px;

  @media (min-width: 992px) {
    padding-top: 80px;
    background-image: url(${christmasTree});
    background-size: cover;
    background-repeat: no-repeat;
  }
  
`
export const loginContainer = styled.div`
    width: 80%;
    background-color: ${C.white};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;

    @media (min-width: 992px) {
      width: 40%;
    }
`

export const formWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
`

export const input = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  ::placeholder {
    color: ${C.bodyColor};
  }
`

export const button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 450;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${C.secondary};

  &:focus,
  &:hover {
    background-color: ${C.secondaryDarker};
  }
`

export const form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`

export const linksWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const link = styled.span`
  font-size: 16px;
`

export const formTitle = styled.h1`
  font-size: 32px;
`

