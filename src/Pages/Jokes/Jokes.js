import React, { useEffect, useState } from 'react'
import JokesCard from '../../Components/JokesCard/JokesCard'
import Navbar from '../../Components/Navbar/Navbar'

import './Jokes'
import axios from 'axios'

function Jokes() {
  const [card, setCard] = useState()
  console.log(card);
  const sendRequest = async () => {
    const res = await axios
      .get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setCard(data.jokes))
  }, [])

  return (
  <div>
    <Navbar/>
      <div className='container jokes '>
      <div className="row">
       
          {
            card && card.map((data) => {
              return (
                <JokesCard data={data} />
              )
            })
          }
       
      </div>



    </div>
  </div>
  )
}

export default Jokes