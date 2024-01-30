import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
 

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
   <div className='fixed flex justify-center flex-wrap inset-x-0 bottom-12 px-2'>
    <div className='flex justify-center flex-wrap bg-white px-3 shadow-lg py-2 gap-3 rounded-3xl'>
    <button onClick={() => setColor("red") } className='outline-none px-3 rounded-full text-white shadow-lg py-1' style={{background: "red"}}>Red</button>
    <button onClick={() => setColor("green") }  className='outline-none px-3 rounded-full text-white shadow-lg py-1' style={{background: "green"}}>Green</button>
    <button onClick={() => setColor("blue") }  className='outline-none px-3 rounded-full text-white shadow-lg py-1' style={{background: "blue"}}>Blue</button>
    <button onClick={() => setColor("purple") }  className='outline-none px-3 rounded-full text-white shadow-lg py-1' style={{background: "purple"}}>Purple</button>
    </div>
    
   </div>
   </div>
  )
}

export default App
