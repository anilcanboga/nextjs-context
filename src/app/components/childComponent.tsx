"use client"
import { useAppContext } from "../context";
import ChildComponentSecond from "./childComponentSecond";

export default function ChildComponent() {
  const { data } = useAppContext();
  return (
    <div style={{height:"700px", borderWidth:"5px",borderColor:"red", 
                 borderStyle:"solid", textAlign:"center",padding:"2%"}}>
      <h3>Child Component</h3>
      <p>This is a child component</p>
      <p>Data : {data}</p>
      <ChildComponentSecond />
    </div>
  )
}
