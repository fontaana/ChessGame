import { useContext, useEffect} from "react"
import { BoardContext } from "../../../context/board"
import moves from "../../../helpers/moves"
import checkjaque from "../../../helpers/checkJaque"
export default function useKnight(filaIndex,columnaIndex,team){

    const {resetAvailableMovements, updateBoard,board,turn} = useContext(BoardContext)
    const boardToupdate = [...board]
    const {knightJaqueMoves}= checkjaque(filaIndex,columnaIndex,team,boardToupdate)
    useEffect(()=>{
        knightJaqueMoves()
        updateBoard(boardToupdate)
    },[turn])

    function showMovements(){
        const resetedBoard= resetAvailableMovements()
        const {knightMoves} = moves(filaIndex,columnaIndex,team,resetedBoard)
        knightMoves()
        updateBoard(resetedBoard)
    }
    return{ showMovements}
}