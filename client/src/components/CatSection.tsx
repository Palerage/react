import React, { useState, useEffect} from 'react';

export const CatSection = () => {

  const [cat, setCat] = useState("");
  const [length, setLenght] = useState();
  const [imgUrl, setImageUrl] = useState();

  const fetchData = async () =>{
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setCat(data.fact)
    setLenght(data.length)
    fetchImage()
  };

  const fetchImage = async () =>{
    await fetch('http://api.thecatapi.com/v1/images/search')
    .then(response => response.json())       
    .then(data => setImageUrl(data[0].url))
  }

  useEffect(() => {
    fetchData()
    fetchImage()
  }, [])

  return (
    <div>
      
      <button onClick={fetchData}>CLICK</button>

      <div className="info">      
      <p>{cat}</p>
      <span>Length: {length}</span>       
      <img className='catimage' src={imgUrl} alt={imgUrl} />
      </div>
      
    </div>
  )
}
