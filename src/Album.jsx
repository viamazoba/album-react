import { useState } from 'react'
import './Album.css'
import AlbumInfo from './AlbumInfo.jsx'
import songs from './data.js'

function Album() {

      const [arrayObjects, setArrayObjects] = useState(songs)
      const [count, setCount] = useState(0)
      const [object, setObject] = useState(arrayObjects[count])
      const [validatorLeft, setvalidatorLeft] = useState(false)
      const [validatorRight, setvalidatorRight] = useState(true)
      const [fillValue, setFillValue] = useState(object.like?1:0);

    

      const handleFill = () => {

        if(fillValue){
            handleChangeFill(object.id)
            setFillValue(0)
        }else{
            handleChangeFill(object.id)
            setFillValue(1)
        }
      };

      const hadleArrowLeft = ()=>{
        let contador = count
        if(count > 1){
            contador = contador - 1
            setCount(contador)
            setObject(songs[contador])
            setvalidatorRight(true)
            setFillValue(arrayObjects[contador].like?1:0)
        }else{
            contador = contador -1
            setCount(contador)
            setObject(songs[contador])
            setFillValue(arrayObjects[contador].like?1:0)
            setvalidatorLeft(false)
        }

      }

      const hadleArrowRight = () =>{
        let contador = count
        if(count < songs.length -2){
            contador += 1
            setCount(contador)
            setObject(arrayObjects[contador])
            setvalidatorLeft(true)
            setFillValue(arrayObjects[contador].like?1:0)
        }else{
            contador += 1
            setCount(contador)
            setObject(arrayObjects[contador])
            setFillValue(arrayObjects[contador].like?1:0)
            setvalidatorRight(false)
        }
      }

      const handleChangeFill = (id) =>{
        const newArrayObjects = arrayObjects.map((item)=>{
          const newObject = item.id === id ? { ...item, like: !item.like } : item;
          return newObject
        })

        setArrayObjects(newArrayObjects)
        console.log(newArrayObjects)
      }
  
    return (
        
        <div className='pre-container'>
            {validatorLeft && <span className="material-symbols-rounded" onClick={hadleArrowLeft}>arrow_back_ios</span>}
            <div className='container'>
                <img src="../public/album_cover.jpg" alt="" />
                <AlbumInfo 
                objeto = {object} 
                handleChangeFill = {handleChangeFill} 
                handleFill = {handleFill}
                fillValue = {fillValue}
                ></AlbumInfo>
            </div>
            {validatorRight && <span className="material-symbols-rounded" onClick={hadleArrowRight}>arrow_forward_ios</span>}
        </div>
    )
  }
  
  export default Album