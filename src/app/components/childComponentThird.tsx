"use client"
import React from "react";
import { useAppContext } from "../context";

export default function ChildComponentThird() {
  const {data, setData} = useAppContext();
  return (
    <div style={{backgroundColor:"", height:"300px",borderWidth:"5px",borderColor:"pink", borderStyle:"solid",padding:"2%"}}>
      <h3>Child Component Third</h3>
      <p>This is a child component third</p>
      <p>Data : {data}</p>
      <button style={{backgroundColor: "green", height:"30px",width:"100px"}} onClick={() => {
        setData("data changed");
      }}>change to data</button>
    </div>
  )
}