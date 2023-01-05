import { conversationTypes } from "../../dialogues"
import { FaLongArrowAltRight } from 'react-icons/fa';
import * as S from './styled'
import * as C from '../../../../config/colors'

function DialogueBar({ texts, activeText, type, handleNextClick, handleAnswerClick, playerInput }) {

  const renderText = () => {
    let renderedText
    switch (type) {

      case conversationTypes.PlayerAnswer:
        renderedText = <div>
          {texts.map((text, index) => (
            <div>
              
              <S.answerButton type="button" onClick={() => handleAnswerClick(index)} isHighlighted={index === playerInput}>
                <S.text>{text['answer']}</S.text>
              </S.answerButton>
            </div>
          ))}
        </div>
        break;
      case conversationTypes.NpcTalk:
      case conversationTypes.PlayerTalk:
      case conversationTypes.EndGame:
        renderedText = <div>
          <S.text>{texts[activeText]}</S.text>
        </div>
      default:
        break;
    }

    return renderedText
  }

  return (
    <S.dialogueContainer className="chatbox">
      <S.dialogue className="dialogue">
        {renderText()}
      </S.dialogue>
      <S.buttonContainer className="buttonContainer">
        <button type="button" onClick={() => handleNextClick()}>
          <S.buttonText>Próximo</S.buttonText>  
        </button> 
      </S.buttonContainer>
    </S.dialogueContainer>
  )
}

export default DialogueBar