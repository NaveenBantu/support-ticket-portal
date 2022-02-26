import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';

import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import Button from './components/layouts/Button';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <>
      <SearchBar />
      <Logs />
      <Button />
      <AddLogModal/>
    </>
  );
}

export default App;
