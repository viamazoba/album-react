import { useState } from 'react'
import './Album.css'

function Disk(props) {
    //const [count, setCount] = useState(0)

    const {objeto} = props
  
    return (

        <div className='container__secondary-text'>
            <h2>{objeto.album}</h2>
            <h3>{objeto.year}</h3>
        </div>
    )
  }
  
  export default Disk