// import {  BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowList/>}>
          </Route>
          <Route path="/show/:id" element={ <ShowDetail />}>
      </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
