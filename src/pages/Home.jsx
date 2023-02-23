import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/trainernam.slice'

const Home = () => {

    const dispens = useDispatch()
    //Para redireccionar a una instancia del dominio propio, re bueno!!
    const redirect = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        dispens( setTrainerName(e.target.tranier.value.trim()) ) 
        e.target.tranier.value = ""
        redirect("/pokedex")
    }

  return (
    <div>
        <h1><img src="./images/imgHome.png" alt="" /></h1>
        <h2>Welcome trainer</h2> <br />
        <p>For start your adventure giveme your name</p>

        <form onSubmit={handleSubmit}>
            <input type="text" id='tranier'/>
            <button>let's do it</button>
        </form>
    </div>
  )
}

export default Home