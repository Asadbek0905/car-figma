import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { navbar } from "./utiels/utiels";
import React from "react";



export default function App() {


  
  return (
    <div>
      <Navbar />
      <Routes>
        {navbar?.map(({ path, element, id }) => {
          return (
            <React.Fragment key={id}>
              <Route path={path} element={element}/>
              <Route path="*" element={<h1>404 Page Not Found</h1>}/>
              <Route path="/" element={<Navigate to={"/home"}/>}/>
            </React.Fragment>
          )
        })}
      </Routes>
    </div>
  )
}
