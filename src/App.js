import { useState } from "react";


function App() {
  const[count,setCount]=useState(0)

//increment
const increment=()=>{
  setCount(count+1)
  console.log(count);
}

//decrement
const decrement=()=>{

  if(count>0)
    {
      setCount(count-1)
    }
    else{
      setCount(count)
    } 
}
const reset=()=>{
  setCount(0)
  console.log(count);
}
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-black">
    <div className=" mt-3">
    <span className="rounded-full text-white text-2xl bg-red-500 font-bold px-3 py-2">{count} </span>
    </div>
<div className="flex gap-2 mt-6 ml-2 ">
        <button className="text-black bg-white px-6 py-2 font-bold border-[2px] border-white text-xl rounded-xl " onClick={increment}>+</button>
        <button className="text-white bg-black px-6 py-2 font-bold rounded-lg border-[2px] text-xl border-white " onClick={reset}>Reset</button>
        <button className="text-black bg-white px-6 py-2 font-bold rounded-lg border-[2px] text-xl border-white " onClick={decrement}>-</button>
        </div>
    </div>
  );
}

export default App;