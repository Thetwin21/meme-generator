import { useState , useEffect } from 'react';
import memeDAta from '../MemeData.json';

const MemeContainer = () => {
    const [allMemeImages, setAllMemeImages ] = useState(memeDAta)
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/1g8my4.jpg"
    })
    
    const addMeme = () => {
        const randomNum = Math.floor(Math.random() * memeDAta.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: allMemeImages[randomNum].url
        }))
    }
     const setChange = (e) => {
         const { name, value} = e.target
         setMeme(prevMeme => ({
             ...prevMeme,
                 [name]: value
         }))
     }
    return (

        <div className="meme-container">
            <div className="input-text">
                <input 
                    type="text" 
                    name='topText' 
                    value={meme.topText} 
                    onChange={setChange} 
                    placeholder={meme.topText} 
                    className="top" />
                <input 
                    type="text" 
                    name='bottomText'
                    value={meme.bottomText} 
                    onChange={setChange} 
                    placeholder={meme.bottomText} 
                    className="bottom" 
                    />
            </div>
            <button onClick={addMeme} >Get A New Image</button>
            <div className='memeDiv'>
                <p className='top-text'>{meme.topText}</p>
                <img src={meme.imgUrl} alt="" className="meme-img" />
                <p className='bottom-text'>{meme.bottomText}</p>
            </div>
        </div>
    )
}

export default MemeContainer
