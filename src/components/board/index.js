import { useState, useRef, useCallback, useEffect } from 'react';
import { Container, Box } from './styles';

export function Board({
  winner = '',
  setWinner = () => {},
  reset = false,
  setReset = () => {}
}){
  const [turn, setTurn] = useState(0);
  const [data, setData] = useState([
    '','','',
    '','','',
    '','',''
  ])

  const boardRef = useRef(null);

  const handleDraw = useCallback((event, index) => {
    if(data[index - 1] === '' && winner === ''){
      const current = turn === 0 ? '⭕' : '❌';
      data[index - 1] = current;
      event.target.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  }, [data, turn, winner])

  const checkRow = useCallback(() => {
    let isMatch = false;
    for(let i=0; i<9; i+=3){
      isMatch |= (data[i] === data[i+1] && data[i] === data[i+2] && data[i] !== '')
    }
    return isMatch;
  }, [data])

  const checkCol = useCallback(() => {
    let isMatch = false;
    for(let i=0; i<3; i++){
      isMatch |= (data[i] === data[i+3] && data[i] === data[i+6] && data[i] !== '')
    }
    return isMatch;
  }, [data])

  const checkDiagonal = useCallback(() => {
    return(
      (data[0] === data[4] && data[0] === data[8] && data[0] !== '')
      || (data[2] === data[4] && data[2] === data[6] && data[2] !== '')
    )
  }, [data])

  const checkWin = useCallback(() => {
    return (checkRow() || checkCol() || checkDiagonal())
  }, [checkCol, checkRow, checkDiagonal])

  const checkTie = useCallback(() => {
    let count = 0;
    data.forEach((cell) => {
      if(cell !== ''){
        count++;
      }
    })

    return count === 9;
  }, [data])

  useEffect(() => {
    setData([
      '','','',
      '','','',
      '','',''
    ]);
    const cells = boardRef.current.children;
    for (let i = 0; i < 9; i++){
      cells[i].innerText = '';
    }

    setTurn(0);
    setWinner('');
    setReset(false)
  }, [reset, setReset, setWinner])

  useEffect(() => {
    if(checkWin()){
      setWinner(turn === 0 ? 'Player 2 Wins!' : 'Player 1 Wins!');
    } else if(checkTie()){
      setWinner('It`s a Tie!');
    }
  }, [checkWin, checkTie, setWinner, turn])

  return(
    <Container ref={boardRef}>
      <Box onClick={(e) => handleDraw(e, 1)}/>
      <Box onClick={(e) => handleDraw(e, 2)}/>
      <Box onClick={(e) => handleDraw(e, 3)}/>
      <Box onClick={(e) => handleDraw(e, 4)}/>
      <Box onClick={(e) => handleDraw(e, 5)}/>
      <Box onClick={(e) => handleDraw(e, 6)}/>
      <Box onClick={(e) => handleDraw(e, 7)}/>
      <Box onClick={(e) => handleDraw(e, 8)}/>
      <Box onClick={(e) => handleDraw(e, 9)}/>
    </Container>
  )
}