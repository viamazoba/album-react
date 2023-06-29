import { useState } from 'react'
import './Album.css'

function Genre(props) {
    //const [count, setCount] = useState(0)
    const {objeto, handleFill, fillValue} = props

    return (

        <div className='container__third-text'>
            <div className='container__genre'>
                <h4>{objeto.genre}</h4>
            </div>
            <span className="material-symbols-rounded"
            style={{ fontVariationSettings: `"FILL" ${fillValue}, "wght" 200, "GRAD" 0, "opsz" 48` }} onClick={handleFill}
            >favorite</span>
        </div>
    )
  }
  
  export default Genre