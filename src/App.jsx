import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SavedImages from './components/SavedImages';
import LocomotiveScroll from 'locomotive-scroll';
import View from './components/View';




const App = () => {
  const [search, setsearch] = useState('uttrakhand')
  const locomotiveScroll = new LocomotiveScroll();
  const API_KEY = '9goyKdr6LdyqrPgEk2Jp5IkHUTvQru2jyn8TD6IIAg3VUrXBwh1M7AlB';
 
  const [images, setimages] = useState([])

  const fetchImg = async () => {
    const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`, {
      headers: {
        Authorization: API_KEY,
      }
    })
    setimages(res?.data?.photos);
  }
  

  useEffect(() => {
    fetchImg()
  }, [search])


  return (

    <div className='bg-black text-white relative  p-5 min-h-screen'>
     
      <Routes>
        <Route path='/' element={<Home images={images} search={search} setsearch={setsearch}/>}/>
        <Route path='/saved' element={<SavedImages/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  )
}

export default App