import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';

import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <>
      <SearchBar />
      <Logs />
    </>
  );
}

export default App;
