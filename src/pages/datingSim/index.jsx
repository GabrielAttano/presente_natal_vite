import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

import MainScreen from "../../components/datingSim/mainScreen";
import * as S from './styled'

function DatingSim() {
  const isRobot = useSelector((state) => state.user.isRobot)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRobot) {
      navigate('/')
      toast.error('Você já provou que não é um robô.')
    }
  }, [])

  return (
    <S.container>
      <MainScreen/>
    </S.container>
  )
}

export default DatingSim