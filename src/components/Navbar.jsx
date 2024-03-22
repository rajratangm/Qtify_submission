import React from 'react'
import logo from "../assets/logo3.png"
import Logo from './logo-component/Logo'
import SearchBar from './serchbar-component/Search-bar'
function Navbar({songs}) {
  return (
    <div className='flex items-center justify-between px-5 py-3 bg-[#34c94b]'>
    <Logo img = {logo}/>
    <SearchBar songs = {songs} />
    <div>
        <button className='bg-[#219b21] text-white px-2 py-1 rounded-md'>Feedback</button>
    </div>

    </div>
  )
}

export default Navbar