import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  const click = (color) => {
    setColor(color)
  }

  useEffect(()=>{
     document.body.style.backgroundColor = color
  },[color])
  
  return (
         <div style={{minHeight:'100vh'}} className='d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column '>
              <div>
                <h1 style={{fontSize:'100px', color:'white'}}>Background Color Change</h1>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                 <button onClick={()=>click('red')} className="btn fs-4 mx-3 px-3" style={{color:'black' ,backgroundColor:'white', borderRadius:'30px' ,fontWeight:600}} type="button">RED</button>
                 <button onClick={()=>click('blue')} className="btn fs-4 mx-3 px-3" style={{color:'black' ,backgroundColor:'white', borderRadius:'30px' ,fontWeight:600}} type="button">BLUE</button>
                 <button onClick={()=>click('green')} className="btn fs-4 mx-3 px-3" style={{color:'black' ,backgroundColor:'white', borderRadius:'30px' ,fontWeight:600}} type="button">GREEN</button>
                 <button onClick={()=>click('purple')} className="btn fs-4 mx-3 px-3" style={{color:'black' ,backgroundColor:'white', borderRadius:'30px' ,fontWeight:600}} type="button">PURPLE</button>
              </div>
            </div>
         </div>
  )
}

export default App
