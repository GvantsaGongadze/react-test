import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Ayran from './Ayran';
import Narya from './Narya';


function App() {
  const [searchValue, setSearchValue] = useState("search")

  return (
    <div className="App">
      <Search value={searchValue} setValue={setSearchValue} />
      <Ayran value={searchValue} />
      <Narya eulav={searchValue} />
    </div>
  );
}

export default App;
