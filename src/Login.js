import React from "react"

export default function Login(){
    const[formData, setFormData] = React.useState({
        email : "",
        pw :"",
        confirmpw:"",
        newsletter : false
    })
   
    function handleChange(event){
        const{name,value,type,checked}=event.target
        setFormData(prevFormData => {
            return { ...prevFormData, [name]: type==="checkbox"?checked:value}
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        formData.pw === formData.confirmpw? console.log("Successfully signed up") : console.log("pws dont match")
        formData.newsletter && console.log("thanks for newlsteer")
    }
    return(
        <div className="maindiv">
            <form onSubmit={handleSubmit} className="mainform">
                <input className="inputs"
                    type="text"
                    name="email"
                    placeholder = "Email"
                    value= {formData.email}
                    onChange={handleChange}
                />
                  <input className="inputs"
                    type="password"
                    name="pw"
                    placeholder = "Enter password"
                    value= {formData.pw}
                    onChange={handleChange}
                />
                  <input className="inputs"
                    type="password"
                    name="confirmpw"
                    placeholder = "Confirm password"
                    value= {formData.confirmpw}
                    onChange={handleChange}
                />
               <div className="checkbox">
                <input  
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                />
              <label className="label" htmlFor="newsletter">Subscribe to Newsletters</label>
              </div>
                <button className="submit">Submit</button>
            </form>
        </div>
        
    )
}