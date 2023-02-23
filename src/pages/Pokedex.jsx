import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Pokecard from '../components/pokedex/Pokecard'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
    //Se invoca un estado global, con el nombre que se tiene en la store (index) como una prop
    const { trainerName } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()
    const [changetypes, setChangetypes] = useState("allpokemons")

    const redirect = useNavigate()

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=9999&offset=0"
        const url2 = "https://pokeapi.co/api/v2/type"
        
        if (changetypes === "allpokemons") {
           axios.get(url)
          .then(res => setPokemons(res.data.results))
          .catch(err => console.log(err))
        }else{
          axios.get(changetypes)
          .then(res => { 
            const pokes = res.data.pokemon.map(results => results.pokemon)
            setPokemons(pokes)
          })
          .catch(err => console.log(err))
        }
     
      axios.get(url2)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
    }, [changetypes])

    const handleSubmit = e =>{
      e.preventDefault()
      
      redirect(`/pokedex/${e.target.poke_search.value.trim().toLowerCase()}`)
    }

    const handleChange = e =>{
      setChangetypes(e.target.value)
    }

  return (
    <>
     <header className='header_position'>
        <h1><span> <b>  Welcome Trainer {trainerName} </b> <br /> in this place you can see all the pokemons :3</span></h1>
    </header>

    <div className="search_poke">
      <form onSubmit={handleSubmit}>
        <div className="in_poke">
          <input id='poke_search' type="text" placeholder='Enter a name pokemon'/><button>Search</button>
        </div>
        
        <select onChange={handleChange}>
          <option value="allpokemons">All</option>
          {
            types?.map(type =>(
              <option key={type?.name} value={type?.url}> {type?.name} </option>
            ))
          }
        </select>
      </form>
    </div>
    <div className="card_pokemon">
        {
            pokemons?.map(pokemon => (
                <Pokecard pokemon = {pokemon} key = {pokemon.name}/>
            ))
        }
    </div>
    </>
   
  )
}

export default Pokedex