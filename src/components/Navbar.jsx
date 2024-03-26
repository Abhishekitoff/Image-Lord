import React from 'react'
import { ImCross } from "react-icons/im";
// 
// "https://api.pexels.com/v1/search?query=nature&per_page=1"

const Navbar = ({setsearch,search}) => {
    const buttonFilter =[
        {
            name:"nature",
            border:'border-red-300',
            text:"text-red-300"
        },
         {
            name:"travel",
            border:'border-green-300',
            text:"text-green-300"
        },
         {
            name:"Rishikesh",
            border:'border-white-300',
            text:"text-white"
        },
         {
            name:"city",
            border:'border-yellow-300',
            text:"text-yellow-300"
        },
         {
            name:"animals",
            border:'border-orange-300',
            text:"text-orange-300"
        },
         {
            name:"fashion",
            border:'border-violet-300',
            text:"text-violet-300"
        },
         {
            name:"technology",
            border:'border-red-300',
            text:"text-red-300"
        },
         {
            name:"india",
            border:'border-purple-300',
            text:"text-purple-300"
        },
         {
            name:"business",
            border:'border-pink-300',
            text:"text-pink-300"
        },
         {
            name:"aesthatic",
            border:'border-red-300',
            text:"text-red-300"
        },
         {
            name:"flower",
            border:'border-yellow-300',
            text:"text-yellow-300"
        },
        
    ]
  
   
  return (
    <>
    <div className='navbar flex justify-between items-center mb-8'>
        {
            buttonFilter.map((btnName,index)=> <button key={index} onClick={()=>setsearch(btnName.name)} className={`border ${btnName.border } ${btnName.text}  px-3 py-1 rounded-lg capitalize hidden sm:block`}>{btnName.name}</button>)
        }

    </div>
    <div className="input w-full flex justify-center">
        <div className='md:w-[50%] sm:[100%] flex items-center gap-2 border px-2 rounded-lg'>
             <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}  className='w-[100%] py-1 outline-none px-2 bg-transparent text-white '/>

            {
              search.length > 0 &&   <ImCross className='text-white' onClick={()=> setsearch('uttrakhand')}/>
            } 
          
        </div>
       
    </div>
    </>
    
  )
}

export default Navbar