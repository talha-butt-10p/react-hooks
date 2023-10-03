import './App.css';
import UseEffect from './Hooks/useEffect';
import RefHook from './Hooks/useRef';
import StateCounter from './Hooks/useState';
import UseEffectProps from './Hooks/useEffectProps';

function App() {
  return (
    <div className="App">
      
      <StateCounter />
      <RefHook />
      <UseEffect />
      <UseEffectProps />

    </div>
  );
}

export default App;
