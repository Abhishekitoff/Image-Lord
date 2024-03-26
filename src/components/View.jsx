import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ImCross } from "react-icons/im";
import Loder from './Loder';

const View = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const imageId = searchParams.get('v');
    const [singleImage, setsingleImage] = useState('');
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchSingleImage = async () => {
            try {
                const res = await axios.get(`https://api.pexels.com/v1/photos/${imageId}`, {
                    headers: {
                        Authorization: '9goyKdr6LdyqrPgEk2Jp5IkHUTvQru2jyn8TD6IIAg3VUrXBwh1M7AlB', // Replace 'Your Pexels API Key' with your actual API key
                    },
                });
                setsingleImage(res?.data?.src?.original);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleImage();
    }, [imageId]);

    return singleImage ? (
        <div className=' w-full flex h-[90vh] items-center justify-center relative'>
            <img src={singleImage} className='object-contain max-w-full max-h-full'  />
            <ImCross  onClick={()=>navigate(-1)} className='absolute cursor-pointer text-2xl hover:text-red-500 right-10 top-10'/>
        </div>
    ): <Loder/>
};

export default View;
