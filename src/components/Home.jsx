import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Loder from './Loder'


const Home = ({ images, setsearch,search }) => {

    return (
        <>
       
            <Navbar setsearch={setsearch} search={search} />
            {
                images ? <div className='flex flex-wrap  gap-6 my-8 justify-center items-center '>
                {
                    images.map((img) => {
                        return <Link to={`/view?v=${img.id}`}  className="sm:h-[300px] overflow-hidden flex flex-col justify-center items-center">
                            <img className="object-cover  hover:scale-105 duration-500  " width={'350px'} key={img.id} src={img?.src?.original} alt={img?.alt} />

                        </Link>

                    })
                }
            </div> : <Loder/>
            }
            

        </>)
}

// to={`/view?v=${img.url} `} 

export default Home