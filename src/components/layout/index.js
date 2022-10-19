import { Container, PageContent } from "./styles"

export function Layout({ children }){
  return (
    <Container>
      <PageContent>
        { children }
      </PageContent>
    </Container>
  )
}