import styled from 'styled-components'
import * as C from '../../../../config/colors'


export const dialogueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  background-color: rgba(255, 56, 182, 0.8);
  width: 95%;
  height: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${C.white};
  border-style: solid;
  padding: 4px 8px;

  @media (min-width: 992px) {
    width: 90%;
    border-width: 2px;
    padding: 5px 20px;
  }
`

export const dialogue = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 90%
`

export const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10%;
`
export const buttonText = styled.span`
  color: ${C.secondary};
  font-size: 18px;
  font-weight: 600;
  text-shadow: -1px 1px 0 #000,
              1px 1px 0 #000,
              1px -1px 0 #000,
              -1px -1px 0 #000;
  &:hover {
    color: ${C.secondaryDarker};
  }
  @media (min-width: 992px) {
    font-size: 25px;
  }
`

export const answerButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.isHighlighted ? 'rgba(255, 56, 182, 0.9)' : 'none'};
  border: none;
  border-radius: 5px;
  padding: 5px 0px;
  text-align: left;
  &:hover {
    background-color: rgba(255, 56, 182, 0.6);
  }
`

export const text = styled.span`
  color: ${C.white};
  font-size: 22px;
  text-shadow: -1px 1px 0 #000,
              1px 1px 0 #000,
              1px -1px 0 #000,
              -1px -1px 0 #000;
`
