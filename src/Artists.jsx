import { useState } from 'react'
import './Album.css'

function Artists(props) {
    //const [count, setCount] = useState(0)

    const {objeto} = props
  
    return (

        <div className='container__principal-text'>
            <h1>{objeto.name}</h1>
            <p>{objeto.artist}</p>
        </div>
    )
  }
  
  export default Artists