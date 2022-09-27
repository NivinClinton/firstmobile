import React, { useContext, useEffect, useState } from 'react'
import JokesCard from '../../Components/JokesCard/JokesCard'
import Navbar from '../../Components/Navbar/Navbar'

import './Jokes'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import './Jokes.css'
import { AuthContext } from '../../Context/UserContext'

function Jokes() {
  const { setCurrentUser ,currentUser } = useContext(AuthContext)
  console.log(currentUser);
  console.log(setCurrentUser);
  const [loading, setLoading] = useState(false)

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
    setCurrentUser(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  useEffect(() => {
    sendRequest().then((data) => setCard(data.jokes))
  }, [])

  return (
    <div onLoad={setCurrentUser(true)}>
      <Navbar />
      <div className='container jokes '>
        <div className="row">

          {
            loading ?
             <div className='loaderDiv col-md-12 '> <ClipLoader color={"#D0021B"} loading={loading}  size={100} /></div>
              :
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