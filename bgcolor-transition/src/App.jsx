import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  const classProp ='outline-none px-4 py-1 rounded-full text-white shadow-sm hover:cursor-pointer'
  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'  >
            <div className='flex flex-wrap shadow-2xl justify-center gap-3 bg-white rounded-xl px-2 py-2 shadow-lg'>
              <button className={classProp} style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
              <button className={classProp} style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
              <button className={classProp} style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
              <button className={classProp} style={{backgroundColor:'orange'}} onClick={()=>setColor('orange')}>Orange</button>
              <button className={classProp} style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>Pink</button>
              <button className={classProp} style={{backgroundColor:'purple'}} onClick={()=>setColor('purple')}>Purple</button>
              <button className='outline-none px-4 py-1 rounded-full text-black shadow-sm hover:cursor-pointer' style={{backgroundColor:'lavender'}} onClick={()=>setColor('lavender')}>lavender</button>


            </div>
        </div>
      </div>
    
  )
}

export default App
