import React from 'react'
import { NavLink } from 'react-router-dom'

const links=[
    {url:'/search', text:'Search'},
    {url:'/videos', text:'Videos'},
    {url:'/images', text:'Images'},
    {url:'/news', text:'News'},
];

export const Links = () => {
  <div className='flex sm:justify-around justify-between items-center mt-4'>
    {links.map(({url,text})=>(
        <NavLink key={url} to={url} activeClassName='text-blue-700 text-lg hover:underline'>{text}</NavLink>
    ))}
  </div>
}
