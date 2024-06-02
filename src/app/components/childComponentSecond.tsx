"use client"
import ChildComponentThird from "./childComponentThird";
import { useAppContext } from "../context";

export default function ChildComponentSecond() {
  const {data} = useAppContext();
  return (
    <div style={{backgroundColor: "",height:"500px",borderWidth:"5px",borderColor:"blue", borderStyle:"solid",padding:"2%"}}>
      <h3>Child Component Second</h3>
      <p>This is a child component second</p>
      <p>Data : {data}</p>
      <ChildComponentThird />
    </div>
  )
}