import { useState } from "react";
import { npcImages, npcImageTypes } from "../../../../assets/images/npc";

import * as S from './styled'

function CharacterRenderer({npcImage}) {

  const getImage = () => {
    switch(npcImage) {
      case npcImageTypes.dead:
        return npcImages.dead
      case npcImageTypes.excited:
        return npcImages.excited
      case npcImageTypes.idle:
        return npcImages.idle
      case npcImageTypes.serious:
        return npcImages.serious
      case npcImageTypes.composure:
        return npcImages.composure
      case npcImageTypes.laugh:
        return npcImages.laugh
      case npcImageTypes.question:
        return npcImages.question
      case npcImageTypes.sad:
        return npcImages.sad
      case npcImages.suspicious:
        return npcImages.suspicious
      default:
        return npcImages.idle
    }
  }
  return <S.image src={getImage()}></S.image>
}

export default CharacterRenderer