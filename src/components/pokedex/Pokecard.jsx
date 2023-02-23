import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Pokecard = ({ pokemon }) => {

    const [poke, setPoke] = useState()

    //Para alternar entre páginas
    const redirect = useNavigate()

    useEffect(() => {
      axios.get(pokemon.url)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err))
    }, [])

    const handleClikc = () => {
      redirect(`/pokedex/${poke.id}`)
    }
    
  return (
    <div onClick={handleClikc} className={`poke_container poke_container_${poke?.types[0].type.name}`}>
        <header className={`header_pokecard header_${poke?.types[0].type.name}`}>
            <div className="card_poke_img">
                <img src={poke?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
        </header>
        <div className={`pokeinfo  pokeinfo_${poke?.types[0].type.name}`}>
            <h2> #{poke?.id} {poke?.name}</h2>
            <ul>
              {
                poke?.types.map(type =>(
                    <li  style={{fontWeight: 600}} key={type.type.name}>{type.type.name}</li>
                ))
              }
            </ul>
            <hr />
        </div>
        <div className="pokestats">
            <ul key={poke?.id} className={`stacks stacks-${poke?.types[0].type.name}`} >
              {
                poke?.stats.map(stat => (
                    <div>
                        <li key={stat.stat.url}> <span>{stat.stat.name}</span> <br /> <b> <span>{stat.base_stat}</span> </b>  </li>
                    </div>
                ))
              }
            </ul>
        </div>
    </div>
  )
}

export default Pokecard