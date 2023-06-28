import { useState } from 'react'
import './AlbumInfo.css'
import Artists from './Artists'
import Disk from './Disk'
import Genre from './Genre'

function AlbumInfo(props) {
    //const [count, setCount] = useState(0)

    const {objeto, handleChangeFill} = props
  
    return (

        <div className='container__principal'>

            <Artists objeto = {objeto}></Artists>
            <Disk objeto = {objeto}></Disk>
            <Genre objeto = {objeto} handleChangeFill = {handleChangeFill}></Genre>
        </div>
    )
  }
  
  export default AlbumInfo