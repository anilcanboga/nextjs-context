import ChildComponent from './components/childComponent'

export default function Home() {
  return (
    <>
        <div style={{ backgroundColor: "white", height:"100vh", color: "black", textAlign:"center", padding:"5%"}}>
         <h1>Main Page </h1> 
           <ChildComponent />
        </div>
      </>
  )
}