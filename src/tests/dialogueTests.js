import {dialogue0, conversationTypes } from '../components/datingSim/dialogues/dialogue0.json'

const errorLog = []

function testDialogue(dialogue = dialogue0) {

  const hasData = 'data' in dialogue
  if (!hasData) {
    errorLog.push('No data found in dialogue')
    console.log(errorLog)
    return false
  }
  const data = dialogue['data']
  const { start } = data
  let conversation = data[start]

  while(conversation != null) {
    console.log(`===========Test start===========`)
    console.log(conversation)
    if (!isValidConversation(conversation)) {
      console.log(errorLog)
      return false
    }
    
    const { type } = conversation
    switch (type) {

      case conversationTypes.NpcTalk:
        if (!isValidTalk(conversation)) {
          console.log(errorLog)
          return false
        }
        break
      case conversationTypes.PlayerTalk:
        if (!isValidTalk(conversation)) {
          console.log(errorLog)
          return false
        }
        break
      case conversationTypes.PlayerAnswer:
        if (!isValidPlayerAnswer(conversation)) {
          console.log(errorLog)
          return false
        }
        break
      case conversationTypes.EndGame:
        console.log('END GAME - TODO')
        return true
      default:
        console.log('testDialogue - Invalid type')
        return false
    }
    console.log(`No errors found`)
    console.log(`===========Test end===========`)
    conversation = getNext(conversation, data)
  }
  console.log(`===========Error log===========`)
  console.log(errorLog)
}

function isValidConversation(conversation) {
  console.log('testing if is valid conversation')
  if (!conversation) {
    errorLog.push(`Invalid conversation: Conversation is none`)
    return false
  }

  if ('type' in conversation) {
    console.log('done')
    return true
  } else {
    errorLog.push(`${conversation}: Invalid conversation - No 'type' specified`)
    return false
  }
}

function isValidTalk(conversation) {
  console.log('testing if is valid npc/player talk')
  const hasText = 'text' in conversation
  const hasNext = 'next' in conversation
  const hasImage = 'npc_image' in conversation

  if (!hasNext) {
    errorLog.push(`invalid talk - conversation has no 'next'`)
  }
  if (!hasText) {
    errorLog.push(`invalid talk - conversation has no 'text'`)
  }
  if (!hasImage) {
    errorLog.push(`invalid talk - conversation has no 'npc_image' (Optional)`)
  }
  console.log('done')
  return hasText && hasNext
}

function isValidPlayerAnswer(conversation) {
  console.log('testing if is valid player answer')
  const hasText = 'text' in conversation
  const hasImage = 'npc_image' in conversation
  
  if (!hasText) {
    errorLog.push(`invalid player answer - Conversation has no 'text'`)
    return false
  } else {
    let hasAnswer, hasNext
    for (const text of conversation['text']) {
      hasAnswer = 'answer' in text
      hasNext = 'next' in text

      if (!hasAnswer) {
        errorLog.push(`invalid player answer - 'answer' is missing in text "${text}"`)
        hasAnswer = false
        break
      }
      if (!hasNext) {
        errorLog.push(`invalid player answer - 'next' is missing in text "${text}"`)
        hasNext = false
        break
      }
    }
    console.log('done')
    return hasAnswer && hasImage && hasAnswer && hasNext
  }
}

function getNext(conversation, data) {

  const { type } = conversation

  switch(type) {
    case conversationTypes.NpcTalk:
      return data[conversation['next']]
    case conversationTypes.PlayerTalk:
      return data[conversation['next']]
    case conversationTypes.EndGame:
      console.log('get next - End game found')
      return null
    case conversationTypes.PlayerAnswer:
      console.log('get next - PlayerAnswer not implemented')
      return null
    default:
      console.log('get next - Invalid type found ')
  }
}

export default testDialogue