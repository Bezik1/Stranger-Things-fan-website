import Background from './components/Background/Background';
import BoxContainer from './components/Box/BoxContainer'
import Vecna from  './components/Vecna/Vecna'
import Demogorgon from './components/Demogorgon/Demogorgon';
import MindFlayer from './components/MindFlayer/MindFlayer';

import './App.css';
import { Suspense } from 'react';
import Loading from './components/Loading/Loading';

const App = () => {

    return (
      <div className="App">
        <Suspense fallback={ <Loading /> }>
          <Background />
          <BoxContainer />
          <Vecna />
          <Demogorgon />
          <MindFlayer />
        </Suspense>
      </div>
    )
}

export default App;

