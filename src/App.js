import Navbar from "./components/Navbar";
import hero from "./assets/hero.png"
import { useEffect, useState } from "react";
import CardCategory from "./components/card-component/CardCategory";
function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGenres] = useState("all")
  const [fillteredSongs, setFillteredSongs] = useState([]);

  const getTopAlbums = async() => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    const data = response.json();
    return data
  }

  const getNewAlbums = async() => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/new");
    const data = response.json();
    console.log(data);
    return data
  }

  const getSongs = async() => {
    const response = await fetch("https://qtify-backend-labs.crio.do/songs");
    const data = response.json();
    return data
  }

  useEffect(() => {
    async function run(){
      const topAlbums = await getTopAlbums();
      const newAlbums = await getNewAlbums();
      setTopAlbumsData(topAlbums);
      setNewAlbumsData(newAlbums);
    }
    run();
  }, [])

  useEffect(() => {
    async function run(){
      const songs = await getSongs();
      setAllSongs(songs);
      setFillteredSongs(songs);
      if(genres !== "all"){
        setFillteredSongs(songs.filter( song => song.genre.label === genres))
      }
    }
    run();
  }, [genres])

  return (
    <div className=''>
      <Navbar songs = {allSongs} />
      <div className="h-[270px] bg-black flex p-3 justify-center">
        <img className="object-contain h-full" src={hero} alt="" />
      </div>
      <CardCategory albumsData={topAlbumsData} category = "Top Albums"/>
      <CardCategory albumsData={newAlbumsData} category = "New Albums"/>
      <CardCategory albumsData={fillteredSongs} category = "Songs" genres = {genres} setGenres = {setGenres}/>

    </div>
  );
}

export default App;
