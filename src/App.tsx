import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Search from './pages/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Search />
      </div>
    </>
  );
}

export default App;