import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_IMG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <> 
      <div className="fixed -z-10">
        <img className='object-cover h-screen md:h-auto'
        alt="logo"
        src={BG_IMG_URL}
     />
      </div>
      <div className=''>
       
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    
   </>
    
  )
}

export default GptSearchPage