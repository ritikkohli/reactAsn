import {useState} from 'react'

const Form = () =>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [gender,setGender] = useState('')
    const [email,setEmail] = useState('')
    const [marketing, setMarketing] = useState(false)
    const [image, setImage] = useState('')

    return(
        <div className="main">
        <div className="form">
        <div className="img">
            Profile Photo {''} 
            <input type="file" accept="image/*" value={image} onChange={(e) => {setImage(e.target.value)}}/>
        </div>
        <div className="input">
            First name &emsp;{''} 
            <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        </div>
        <div className="input">
            Last name &emsp;{''}
            <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
        <div className="input">
            Gender &emsp;{''}
            <input value="male" type="radio" checked={gender === 'male'} onChange={(e) => {setGender(e.target.value)}}/>Male
            <input value="female" type="radio" checked={gender === 'female'} onChange={(e) => {setGender(e.target.value)}}/>Female
            <input value="other" type="radio" checked={gender === 'other'} onChange={(e) => {setGender(e.target.value)}}/>Other
        </div>
        <div className="input">
            Email &emsp; &emsp; &ensp; {''}
            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="input">
            Allow to recieve marketing mails ? &emsp; &emsp; &emsp; &emsp;&emsp;&ensp;{' '}
            <input  type="checkbox" checked={marketing} onChange={(e) => {setMarketing(!marketing)}}/>
        </div>
        <button
            onClick={()=>{
                if(firstName && lastName && gender && email && marketing && image){
                    console.log(firstName)
                    console.log(lastName)
                    console.log(gender)
                    console.log(email)
                    console.log(marketing)
                    console.log(image)

                    // clearing all inputs
                    setFirstName('')
                    setLastName('')
                    setGender('')
                    setEmail('')
                    setMarketing(false)
                    setImage('')
                }else{
                    alert('Please fill all entity')
                }
            }}
        >
            submit
        </button>
    </div>
    </div>
    )
}

export default Form