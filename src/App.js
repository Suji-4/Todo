import { useState } from "react";
import { useEffect } from 'react';

import axios from "axios"
function App() {

  const[enteredvalue,setvalue]=useState("")
  const[fruit,setfruit]=useState([])

  useEffect(function()
{
  axios.get("http://localhost:1000/fruitlist").then(function(data)
  {
    setfruit(data.data)
  })
},[])

function handleDelete(remove)
    {
        var temparr =fruit.filter(function(item)
        {
            if(item===remove)
            {
                return false
            }
            else
            {
                return true
            }
        })
        setfruit(temparr)
    }
  
  function handlevalue(evt)
  {
     setvalue(evt.target.value)
  }

  function add()
  {
    axios.post("http://localhost:1000/addfruit",{newfruit:enteredvalue})
    setfruit([...fruit,{name:enteredvalue}])
    setvalue("")
  }
  return (
    <div className="m-5 bg-purple-500 text-center ">
      <h1 className="text-violet-950  ">TODO</h1>
     
      <input onChange={handlevalue} className="border border-black "></input>
      <button onClick={add} className="=border border-black bg-black text-white p-1 ">Add</button>
      <ol>
      {fruit.map(function(item,index)
      {
        return<li className="border border-black  rounded-md p-3 text-2xl"key={index}>{item.name}<button onClick={()=>{handleDelete(item)}} className="border border-black rounded-md bg-red-700">Delete</button></li>
       
      })}
      </ol>
    </div >
  );
}

export default App;
