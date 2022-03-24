import React, { useState } from 'react';
import Home from './pages/Home';
import Summary from './pages/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

function App() {

    const [showMovie, setShowMovie] = useState()

  const postData = (val) =>{
    // console.log(val);
    setShowMovie(val)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home postData={postData}/>} />
        <Route path='/summary' element={<Summary showMovie={showMovie}/>} />
      </Routes>
    </>
  );
}

export default App;
