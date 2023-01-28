import './App.css';

// Import the components
import Header from './Header';
import Proposal from './Proposal'
import Home from './Home'
import InsList from './InsList';
import About from './About';
//----------------------

import { useState } from 'react'

function App() {
  const [href, setHref] = useState('none');

  console.log(href)
  return (
    <div className="App">
      <Header href={href} setHref={setHref}/>

      {href==="#proposal"? <Proposal/>: <></>}
      {href==='none' || href==="#default"? <Home/>: <></>}
      {href==="#about"? <About/>: <></>}
      {href==='#ins' ? <InsList/>: <></>}
    </div>
  );
}

export default App;
