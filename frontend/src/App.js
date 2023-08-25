import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import Network from './network';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Network/>
      </BrowserRouter>
    </div>
  );
}

export default App;
