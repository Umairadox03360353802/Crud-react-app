
 import './App.css';

import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Reade from './components/Reade';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container ">
    <Routes>
      <Route exact path='/' element={<Reade/>}></Route>
      <Route exact path='/Create' element={<Create/>}></Route>
      <Route exact path='/Edit' element={<Edit/>}></Route>
    </Routes>
     
      </div>
  );
}

export default App;
