import React,{useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

      const getData = async()=>{
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=20")

        setData(response.data);
        console.log(data);
  } 

  return (
        <>
        <div className='p-10 pb-190 pl-30'>
            <button
            onClick={getData} className='rounded text-bold text-white text-2xl
            px-4 py-2 mb-3'>Get Data
            </button>
        </div>

        <div className='p-5 ml-10'>
            {data.map(function(elem,idx){
                return<div key={idx} className='bg-black text-white flex 
                               items-center justify-between px-7 py-5 rounded mb-3'>
                
                <img className='h-136 w-136' src={elem.download_url} alt=''/>

                <h2 className='text-bold text-white text-center'>-
                  {elem.author}
                </h2>
                </div>
            })}
        </div>
        </>
  )
}

export default App