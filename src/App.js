import { useCallback, useState } from 'react';
import { Board } from './components/board'
import { Layout } from './components/layout';
import { Title } from './components/title';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const handleReset = useCallback(() => {
    setReset(true)
  }, [])

  return (
    <Layout>
      <Title winner={winner} onReset={handleReset} />
      <Board winner={winner} setWinner={setWinner} reset={reset} setReset={setReset} />
    </Layout>
  );
}

export default App;
