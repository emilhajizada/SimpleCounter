import React, { useContext } from 'react'
import { CounterContext } from '../../context/MainContext'

function Clicker () {
    const [count,setcount] = useContext(CounterContext)
  return (
    <div>Clicker 
        <button onClick={()=>{setcount(count+1)}}>Increase</button> 
        <button onClick={()=>{setcount(count-1)}}>Decrease</button> 
    </div>
  )
}

export default Clicker 