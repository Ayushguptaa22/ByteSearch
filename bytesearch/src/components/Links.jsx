import React from 'react'
import { NavLink } from 'react-router-dom'

const links=[
    {url:'/search', name:'Search'},
    {url:'/videos', name:'Videos'},
    {url:'/images', name:'Images'},
    {url:'/news', name:'News'},
];

export const Links = () => {
  <div className='flex sm:justify-around justify-between items-center mt-4'>
    {links.map(({url,name})=>(
        <NavLink key={url} to={url} activeClassName='text-blue-700 text-lg hover:underline'>{name}</NavLink>
    ))}
  </div>
}
