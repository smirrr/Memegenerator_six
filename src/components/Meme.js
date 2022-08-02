import React from "react"
import memesData from "../memesData.js"

export default function Meme(){
    const [newurl,setNewurl] = React.useState(memesData.data.memes[0].url)
    function handleclick(){
        let url
        // console.log("Clickedddddd")
        const memes = memesData.data.memes
        const randomnumber = Math.floor(Math.random() * (memes).length)
        // console.log(memes[1])
        // console.log(randomnumber)
        console.log(memes[randomnumber])
        url= memes[randomnumber].url
        console.log(url)
        setNewurl(url)
    }
    const[formData, setFormData] = React.useState(
        {topText : "",
         bottomText : ""
        }
    )
    console.log(formData)
    function handleChange(event){
        const{name,value}=event.target
        setFormData(prevFormData => {
            return {...prevFormData,
                        [name]:value
                   }
        })
    }
    return(
        <div className="form">
            
            <div     className="mainform">
                <div className="form">
                    <input 
                    type="text" 
                    className="textbox" 
                    name="topText" 
                    placeholder="top text"
                    onChange={handleChange}
                    value = {formData.topText}
                    />
                    <input 
                    type="text" 
                    className="textbox" 
                    name="bottomText" 
                    placeholder="bottom text"
                    onChange={handleChange}
                    value = {formData.bottomText}
                    />
                </div>
                <input type="submit" onClick={handleclick} className="submit" value="Get a new meme image 🖼"/>
                <div className="absolute">
                    <img src={newurl} className="picture" />
                    <p className="toptext">{formData.topText}</p>
                    <p className="bottomtext">{formData.bottomText}</p>
                </div>
            </div>
           
        </div>
    )
}