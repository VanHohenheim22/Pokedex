import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Protected = () => {
   const { trainerName } = useSelector(state => state)

   const redirect = useNavigate()

   const handleClick = () =>{
    redirect(`/pokedex`)
   }
    if (trainerName) {
        return <div>
          <div className="header_pag">
            <div className='red_rect'></div>
            <img onClick={handleClick} className='image_header_p' src="./images/imgHome.png" alt="" />
            <div className="black_rect"></div>
            <div className="circle_m">
              <div className="circle_men"></div>
            </div>
          </div>
          <Outlet /> 
          </div>
          
    }else{
        return <Navigate to = "/"/>
    }
  return (
    <div>Protected</div>
  )
}

export default Protected