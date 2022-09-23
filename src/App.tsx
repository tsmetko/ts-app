import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes'

function App() {
  const routing = useRoutes(routes({bul:true}))
  console.log("App")
  return (
    <>
      {routing}
    </>
  );
}

export default App;
