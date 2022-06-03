import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { UpdateProduct } from "./Components/UpdateProduct";
import { AddProduct } from "./Components/AddProduct";
import { NotFount } from "./Components/NotFount";
import React from "react";
import { List } from './Components/List';
  

function App() {
   
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<h1 className='home'>Home Page</h1>} ></Route> 
          <Route exact path="/add" element= {<AddProduct/>} ></Route>
          <Route exact path="/update" element= {<UpdateProduct/>} ></Route>
          <Route exact path="/login" element= {<Login/>} ></Route>
          <Route exact path="/register" element= {<Register/>} ></Route>
          <Route exact path="/list" element= {<List/>} ></Route>
          <Route exact path="/*" element= {<NotFount/>} ></Route>
        </Routes>
        
     
    </div>
  );
}

export default App;
