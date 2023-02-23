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
    <div className='home_page'>
        <div className="header_pag">
            <div className='red_rect'></div>
            <img className='image_header_p' src="./images/imgHome.png" alt="" />
            <div className="black_rect"></div>
            <div className="circle_m">
              <div className="circle_men"></div>
            </div>
          </div>
        <div className="home_letter">
        <h2>Welcome trainer!!</h2> <br />
        <p>For start your adventure giveme your name</p>

        <form onSubmit={handleSubmit}>
        <div className="in_poke">
           <input type="text" id='tranier'/>
            <button>let's do it</button>
        </div>
           
        </form>
        </div>
    </div>
  )
}

export default Home