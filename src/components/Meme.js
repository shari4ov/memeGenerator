import React from "react";
import {BsDownload} from "react-icons/bs"
export default function Meme(){
       const [meme,setMeme] = React.useState({
              topText: "",
              bottomText:"",
              randomImage: "http://i.imgflip.com/1bij.jpg"
       })
       const [allMemes,setAllMemes] = React.useState();
       React.useEffect(()=>{
              async function getMemes(){
                     const res = await fetch("https://api.imgflip.com/get_memes")
                     const data = await res.json()
                     setAllMemes(data.data.memes)
              }
              getMemes()
       },[])
       function getMemeImage(){
              const randomNumber= Math.floor(Math.random()*allMemes.length)
              const url =allMemes[randomNumber].url
              setMeme(prevMeme => ({
                     ...prevMeme,
                     randomImage:url
              }))
       }
       function handleChange(event){
              const {name,value} = event.target
              setMeme(prevMeme => ({
                     ...prevMeme,
                     [name]: value
              }))
       }
       return (
              <div className="container mt-5 align-items-center" id="meme--container">
                     <div className="row">
                            <div className="d-flex input--container align-items-center justify-content-center">
                                          <input 
                                          type='text' 
                                          className="input form-control  m-2" 
                                          placeholder="Top Text" 
                                          name='topText' 
                                          value={meme.topText} 
                                          onChange={handleChange}/>
                                          <input 
                                          type="text" 
                                          className="input form-control  m-2" 
                                          placeholder="Bottom Text" 
                                          name='bottomText' 
                                          value={meme.bottomText} 
                                          onChange={handleChange}/>
                            </div> {/* input--container */}
                     </div> {/* row */}
                     <div className="w-100"></div>
                     <div className="container btn--container ">
                            <div className="row align-items-center justify-content-center">
                                          <button 
                                                 type='submit' 
                                                 id="button--meme" 
                                                 className="btn btn-primary mt-2 col-md-auto" 
                                                 onClick={getMemeImage} >
                                                 Get a new meme image⛺
                                          </button>
                            </div> {/* row */}
                     </div>{/* btn--container */}
                     <div className="container meme text-center">
                                   <img  src={meme.randomImage} className="meme--image rounded max-auto img-fluid" alt="meme image"/>
                                   <h2 className="meme--text top">{meme.topText}</h2>
                                   <h2 className="meme--text bottom">{meme.bottomText}</h2> 
                     </div> {/* meme */}
                     <div className="d-flex justify-content-center align-items-center">
                                          <a href={meme.randomImage}
                                                 download
                                                 className="btn btn-success mt-3"
                                                 >
                                          <BsDownload className="icon--btn"/>
                                                 Download </a>
                     </div> {/* download--btn */}
              </div> /* meme--container */
       )
}