import { Container, Label, Text, Row, Button } from "./styles";

export function Title({ winner, onReset }){
  return(
    <Container>
      <Text>Simple Tic Tac Toe</Text>
      <Row>
        <Label>Player 1: ⭕</Label>
        <Label>Player 2: ❌</Label>
      </Row>
      {winner && (
        <Row $mt='32px'>
          <Label>{winner}</Label>
          <Button onClick={onReset}>Reset</Button>
        </Row>
      )}
    </Container>
  )
}