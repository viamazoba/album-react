import { useState } from 'react'
import './Album.css'
import AlbumInfo from './AlbumInfo'

function Album() {
    
    const songs = [
        {
          id: 1,
          name: "Billie Jean",
          artist: "Michael Jackson",
          album: "Thriller",
          year: 1982,
          like: false,
          genre: "Pop",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 2,
          name: "Sweet Child o' Mine",
          artist: "Guns N' Roses",
          album: "Appetite for Destruction",
          year: 1987,
          like: false,
          genre: "Rock",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 3,
          name: "Like a Prayer",
          artist: "Madonna",
          album: "Like a Prayer",
          year: 1989,
          like: false,
          genre: "Pop",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 4,
          name: "Smells Like Teen Spirit",
          artist: "Nirvana",
          album: "Nevermind",
          year: 1991,
          like: false,
          genre: "Grunge",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 5,
          name: "Wonderwall",
          artist: "Oasis",
          album: "(What's the Story) Morning Glory?",
          year: 1995,
          like: false,
          genre: "Britpop",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 6,
          name: "Smooth",
          artist: "Santana ft. Rob Thomas",
          album: "Supernatural",
          year: 1999,
          like: false,
          genre: "Rock",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 7,
          name: "Crazy in Love",
          artist: "Beyoncé ft. Jay-Z",
          album: "Dangerously in Love",
          year: 2003,
          like: false,
          genre: "R&B",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 8,
          name: "Hey There Delilah",
          artist: "Plain White T's",
          album: "All That We Needed",
          year: 2005,
          like: false,
          genre: "Pop Rock",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 9,
          name: "Umbrella",
          artist: "Rihanna ft. Jay-Z",
          album: "Good Girl Gone Bad",
          year: 2007,
          like: false,
          genre: "R&B",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        },
        {
          id: 10,
          name: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          like: false,
          genre: "Soul",
          cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
        }
      ];

      const [count, setCount] = useState(0)
      const [object, setObject] = useState(songs[count])
      const [validatorLeft, setvalidatorLeft] = useState(false)
      const [validatorRight, setvalidatorRight] = useState(true)

      const hadleArrowLeft = ()=>{
        if(count > 1){
            setCount((prevCount) => prevCount - 1)
            setObject(songs[count])
            setvalidatorRight(true)
            console.log(songs[count])
        }else{
            setCount((prevCount) => prevCount - 1)
            setObject(songs[count])
            setvalidatorLeft(false)
        }

      }

      const hadleArrowRight = () =>{
        if(count < songs.length -1){
            console.log(count)
            setCount((prevCount) => prevCount + 1)
            console.log('entró: ' + count)
            setObject(songs[count])
            setvalidatorLeft(true)
            console.log(songs[count])
        }else{
            setCount((prevCount) => prevCount + 1)
            setObject(songs[count])
            setvalidatorRight(false)
        }
      }
  
    return (
        
        <div className='pre-container'>
            {validatorLeft && <span className="material-symbols-rounded" onClick={hadleArrowLeft}>arrow_back_ios</span>}
            <div className='container'>
                <img src="../public/album_cover.jpg" alt="" />
                <AlbumInfo objeto = {object}></AlbumInfo>
            </div>
            {validatorRight && <span className="material-symbols-rounded" onClick={hadleArrowRight}>arrow_forward_ios</span>}
        </div>
    )
  }
  
  export default Album