import { Suspense } from 'react';

import Loading from './components/Loading/Loading';
import Background from './components/Background/Background';
import BoxContainer from './components/Box/BoxContainer'
import Vecna from  './components/Vecna/Vecna'
import WillsDrawings from './components/WillsDrawings/WillsDrawings';
import MindFlayer from './components/MindFlayer/MindFlayer';
import Demogorgon from './components/Demogorgon/Demogorgon';

import './App.css';

const App = () => {

    return (
      <div className="App">
        <Suspense fallback={ <Loading /> }>
          <Background />
          <BoxContainer />
          <Vecna />
          <WillsDrawings />
          <MindFlayer />
          <Demogorgon />
        </Suspense>
      </div>
    )
}

export default App;

