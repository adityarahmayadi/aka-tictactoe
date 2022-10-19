import { Board } from './components/board'
import { Layout } from './components/layout';
import { Title } from './components/title';

function App() {
  return (
    <Layout>
      <Title />
      <Board />
    </Layout>
  );
}

export default App;
