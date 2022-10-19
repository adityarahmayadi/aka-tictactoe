import { Container, Label, Text, Row } from "./styles";

export function Title(){
  return(
    <Container>
      <Text>Simple Tic Tac Toe</Text>
      <Row>
        <Label>Player 1: ⭕</Label>
        <Label>Player 2: ❌</Label>
      </Row>
    </Container>
  )
}