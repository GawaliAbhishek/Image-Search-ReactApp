// import logo from './logo.svg';
import { useState } from 'react';
import Header from './Components/Header';
import ImageSection from './Components/ImageSection';
import Search from './Components/Serach';

function App() {
 const[vari,setText]=useState("");
  const getData=(text)=>{
  setText(text);
  }
  return (
    <>
    <Header/>
    <Search Search={getData}/>
    {vari===""?null :<ImageSection img={vari} />}
    
    </>
  );
}

export default App;
