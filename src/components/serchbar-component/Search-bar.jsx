import React, { useState } from 'react'
import { Search } from 'lucide-react';
function SearchBar({songs}) {
  const [serachData, setSearchData] = useState([]);
  const [target, setTarget] = useState("")
  const handleSearch = (searchFor) => {
    let searchValue = searchFor.toLowerCase();
    setTarget(searchFor)
    if (searchValue === "") {
      setSearchData([]);
    }
    let searchProducts = songs.filter(({ title, artists, genre }) => {
      return (
        title.toLowerCase().includes(searchValue) ||
        artists[0].toLowerCase().includes(searchValue) ||
        genre.key.toLowerCase().includes(searchValue)
      );
    });
    
    if(searchProducts.length === serachData.length){
      setSearchData([])
    }
    console.log(searchProducts)
    setSearchData(searchProducts);
  };

  const debounceSearch = (event, debounceTime) => {
    if (debounceTime) {
      clearTimeout(debounceTime);
    }
    setTimeout(() => {
      handleSearch(event.target.value);
    }, debounceTime);
  };
  return (
    <div>
    <div className='flex items-center gap-0'>
      
        <input onChange={(e) => {
            debounceSearch(e, 500);
          }} className='px-2 py-[6px] rounded-tl-md rounded-bl-md outline-none w-[533px]' type="text" placeholder='Search any song' name="" id="" />
        <button className='bg-white border-l px-2 py-2 rounded-tr-md rounded-br-md'><Search size={20}/></button>
      
    </div>
      {target!=="" && <div className='absolute w-[570px] bg-black p-1  max-h-[500px] overflow-y-auto border-red-100 '>

        {serachData.map((data)=>{return (<div className='flex  h-[120px] my-1 bg-gray-900 text-white w-full border-solid'>
              <div className='w-[120px] h-[120px] border-1'>
                <img className='w-full h-full object-cover' src={data.image} alt="not found" />
              </div>

              <div className='flex-1  flex flex-col items-center justify-center'>
                <p>{data.title}</p>
                {/* <p className='text-xs'>to pjo dhfkjhf hkdjl fheurhbjd fk flhdf k</p> */}
              </div>

              <div className='flex items-center justify-center w-[200px] h-[120px]'>{data.likes}
              </div>
        </div>)})}
      </div>}
    </div>
  )
}

export default SearchBar