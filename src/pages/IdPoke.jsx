import axios from 'axios'
import '../styles/idpoke.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const IdPoke = () => {
    const { id } = useParams()
    const [poke, setPoke] = useState()
    const [anErr, setAnErr] = useState(false)

    useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      axios.get(url)
      .then(res =>{ 
        setPoke(res.data)
        setAnErr(false)
        })
      .catch(err =>{ 
        console.log(err)
        setAnErr(true)
    })
    }, [])
    
    if (anErr) {
        return <h1>pokemon not found :C</h1>
    } else{
        return (

    <div className="pokeid_container">
        <div className="pokeid_info">
            <header className={`pokeid_header header_${poke?.types[0].type.name} `}>
            <div className='info_poke_img'>
                <img src={poke?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
            </header>
            <div className={`pokeid_description pokeinfo_${poke?.types[0].type.name} id_conts`}>
               <div className='description_card'>
                <div id='frame_cont'>
                    <h2 className='frame'>#{poke?.id}</h2>
                </div>
                
                <div className={`description_name pokeinfo_${poke?.types[0].type.name}`}>
                    <hr />
                    <h1>{poke?.name}</h1>
                    <hr />
                </div>

                <div className="description_media">
                    <span>weight: <br /> <b>  {poke?.weight} </b> <br /></span>
                    <span>height: <br /> <b> {poke?.height} </b> </span>
                </div>

                <div className="description_type">
                    <div className="type_info">
                        <span>Type</span>
                        <ul>
                            {
                                poke?.types.map((type, indice = 0) =>(
                                    <div className={`header_${poke?.types[indice].type.name}`}>
                                        <li  style={{fontWeight: 600}} key={type.type.name}>{type.type.name}  </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="type_info">
                        <span>Habilities</span>
                        <ul>
                            {
                                poke?.abilities.map(ability =>(
                                    <div>
                                        <li  style={{fontWeight: 600}} key={ability.ability.url}>{ability.ability.name}  </li>
                                    </div>
                                    
                                ))
                            }
                        </ul>
                    </div>

                </div>
               </div>
            </div>
            <div className="info_stats id_conts">
                <div className="header_stats">
                    <h2>Stats</h2>
                    <hr />
                    <img src="/images/linePokeball.png" alt="" />
                </div>
                <div className="stats_details">
                    <ul>
                        {
                            poke?.stats.map((stat, indice = 0) =>(
                                <li key={indice}> {stat.stat.name}: <br />
                                <progress max="150" value={stat.base_stat} className="barr_stats"/>
                                {stat.base_stat}/150
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="movements id_conts">
          <div className="header_move">
            <h3>Movements</h3>
            <hr />
          </div>
          
          <div className="list_moves">
            <ul>
                {
                    poke?.moves.map(move =>(
            
                        <div className="">
                            <li key={move.move.name}>{move.move.name}</li>
                        </div>
                    ))
                }
            </ul>
          </div>
        </div>

    </div>
  )
    }
  
}

export default IdPoke