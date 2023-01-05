import styled from 'styled-components'
import * as C from '../../../config/colors'
import backgroundRestaurant from '../../../assets/images/scenarios/background-restaurant.jpg'

export const screenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 1000px;
  height: 650px;
  background-image: url(${backgroundRestaurant});
  background-size: cover;
`

export const dialogueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 100%;
`
export const info = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
`
export const identifierContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const npcIdentifier = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${C.bodyColor};
  background-color: ${C.white};
  width: 40%;
  text-align: center;
  border-radius: 15px 15px 0 0;
`

export const imageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
`
