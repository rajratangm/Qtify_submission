import React from 'react'
import Card from './Card'
import Buttons from './Buttons'
import { useState, useEffect } from 'react'
function CardCategory({albumsData, category, genres, setGenres}) {
  const [newData, setNewData] = useState(albumsData.slice(0,6));
  console.log(albumsData);
  const [show, setShow] = useState(false);
  const handelClick = () =>{
    if(show){
      setNewData(albumsData.slice(0,6));
    }else{
      setNewData(albumsData);
    }
    setShow(!show);
  }
  useEffect(() => {
    setNewData(albumsData.slice(0,6));
  }, [albumsData])
  
  return (
    <>
    <div className="p-3 text-2xl font-semibold flex items-center gap-3 bg-black text-white">
        <h1 onClick={()=>setGenres("all")} className={`cursor-pointer ${genres==="all" && "underline text-indigo-500"}`}>{category}</h1>
        <button onClick={handelClick} className='absolute right-5 text-sm'>{show ? "Show Less" : "Show All"}</button>
        {category === "Songs" && 
        <>
        {["Pop","Jazz", "Blues", "Rock"].map(type => {return <Buttons setGenres = {setGenres} type = {type} genres = {genres}/>})}
        </>}
      </div>
      <div className="mt-0 p-2 flex gap-1 bg-black flex-wrap items-center justify-around">
        {newData.length>0 ? newData.map((data, idx) => {
          return (
            <Card key = {idx} image = {data.image} title = {data.title} follower={data.follows} songs = {`${!data.songs?0:data.songs.length}`}/>
          )
        }) : "loading..."}
        
      </div>
      </>
  )
}

export default CardCategory