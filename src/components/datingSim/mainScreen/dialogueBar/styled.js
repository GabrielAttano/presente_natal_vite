import styled from 'styled-components'
import * as C from '../../../../config/colors'


export const dialogueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  background-color: rgba(255, 56, 182, 0.9);
  width: 90%;
  min-width: 500px;
  height: 100%;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${C.white};
  border-style: solid;
  padding: 5px 20px;

  @media (min-width: 992px) {
    
  }
`


export const dialogue = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 80%
`

export const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 20%;
`
export const buttonText = styled.span`
  color: ${C.white};
  font-size: 1.5rem;
`

export const answerButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.isHighlighted ? C.secondaryDarker : 'none'};
  border: none;
  border-radius: 5px;
  padding: 5px 0px;
  &:hover {
    background-color: ${C.secondary};
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
