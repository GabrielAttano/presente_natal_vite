import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from "react-router-dom";

import { setIsRobot } from '../../../features/user/userSlice'
import { setCheckpoint } from '../../../features/visualNovel/visualNovelSlice'
import { dialogue, conversationTypes, checkPoints } from "../dialogues"

import DialogueBar from './dialogueBar';
import CharacterRenderer from './characterRenderer';
import * as S from './styled'

function MainScreen() {
  
  const [data, setData] = useState(dialogue['data'])

  const checkpoint = useSelector((state) => state.visualNovel.checkpoint)
  const [activeConversation, setActiveConversation] = useState(checkpoint)
  const [type, setType] = useState(null)
  const [texts, setTexts] = useState([])
  const [activeText, setActiveText] = useState(0)
  const [npcImage, setNpcImage] = useState('idle')

  const [playerInput, setPlayerInput] = useState(0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const conversation = data[activeConversation]
    if (!conversation) return

    const { type: conversationType, text: conversationTexts, npc_image: npcImage } = conversation
    console.log(conversationType, conversationTexts)
    
    switch(conversationType) {
      case conversationTypes.NpcTalk:
        setTexts(conversationTexts)
        setType(conversationTypes.NpcTalk)
        break
      case conversationTypes.PlayerTalk:
        setTexts(conversationTexts)
        setType(conversationTypes.PlayerTalk)
        break
      case conversationTypes.EndGame:
        const { info } = conversation
        handleEndGame(info)
        break
      case conversationTypes.PlayerAnswer:
        setTexts(conversationTexts)
        setType(conversationTypes.PlayerAnswer)
        break
      default:
        console.log('default')
        break
    }
    setActiveText(0)
    setNpcImage(npcImage)
    if (checkPoints.includes(activeConversation) && checkpoint !== activeConversation) {
      toast.info('Checkpoint!')
      dispatch(setCheckpoint(activeConversation))
    }

  }, [activeConversation])

  const handleEndGame = (info) => {
    if (info === 'bad_ending') {
      console.log('bad ending')
      toast.error('Você não conseguiu me convencer... Que tal tentar de novo?')
      dispatch(setIsRobot(true))
    }
    if (info === 'good_ending') {
      console.log('good ending')
      toast.success('Você respondeu todas as perguntas! Pode criar sua conta!')
      dispatch(setIsRobot(false))
    }
    navigate('/create-account')
  }

  const handleNextClick = () => {
    if (activeText + 1 >= texts.length || type === conversationTypes.PlayerAnswer) {
      getNextConversation()
    } else {
      setActiveText(activeText + 1)
    }
  }

  const handleAnswerClick = (index) => {
    setPlayerInput(index)
  }

  const getNextConversation = () => {
    const currentConversation =  data[activeConversation]
    const { type } = currentConversation
    switch (type) {
      case conversationTypes.NpcTalk:
        setActiveConversation(currentConversation['next'])
        break
      case conversationTypes.PlayerTalk:
        setActiveConversation(currentConversation['next'])
        break
      case conversationTypes.PlayerAnswer:
        const selectedAnswer = texts[playerInput]
        setActiveConversation(selectedAnswer['next'])
        break
      case conversationTypes.EndGame:
        console.log('ending game')
        break
    }
  }

  return (
    <S.screenContainer>

      <S.info>
        <S.identifierContainer>
          {(type === conversationTypes.NpcTalk) &&
            <S.npcIdentifier>
            Gabriel
            </S.npcIdentifier>
          }
          
        </S.identifierContainer>

        <S.imageContainer className='npcImage'>
          <CharacterRenderer npcImage={npcImage}/>
        </S.imageContainer>

      </S.info>

      <S.dialogueContainer className='dialogueBar'>
        <DialogueBar 
          handleNextClick={handleNextClick}
          activeText={activeText} 
          texts={texts} 
          type={type} 
          handleAnswerClick={handleAnswerClick}
          playerInput={playerInput}
        />
      </S.dialogueContainer>

    </S.screenContainer>
  )
}

export default MainScreen