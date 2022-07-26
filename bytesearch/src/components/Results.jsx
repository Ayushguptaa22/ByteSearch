import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider';

export const Results = () => {
    const {results, loading, getResults, searchTerm} = useResultContext();
    const location = useLocation();
    
    useEffect(() => {
        getResults(searchTerm);
    }, []);

    if(loading) return <div>Loading...</div>
  
  switch (location.pathname) {
    case '/search':
      return(
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({link,title}, index)=>(
            <div key={index} className='md:w-2/5 w-full sm:w-1/2 p-4'>
              <a href={link} target='_blank' rel="noreferrer">
                <p className='text-sm'>
                  {link.length> 30? link.substring(0,30): link}
                </p>
                <p className='text-lg hover:underlinde dark:text-blue-300 text-blue-700'>
                  {title}
                  </p>
              </a>
            </div>
          ))}  
        </div>
      )
    case '/video':
      return(
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({link,title}, index)=>(
            <div key={index} className='md:w-2/5 w-full sm:w-1/2 p-4'>
              <ReactPlayer url={link} controls={true} />
            </div>
          ))}
        </div>
      )
    default:
      return <div>404</div>
    
  }
}
