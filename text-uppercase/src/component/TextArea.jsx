import {useState, useRef} from "react"

const TextArea = () =>{
    const [intro,setintro] = useState();
    const input = useRef()

    const upperCase =()=> {
        const temp = input.current.value
        setintro(temp.toUpperCase())
    }

    function reset(){
        input.current.value = ''
        setintro('')
    }
    return(
        <div className="txt">
                <h3>Write your intro : </h3>
                <textArea ref={input}></textArea>
                <br/>
                <div>
                <button onClick={upperCase}>Upper Case</button>
                <button onClick={reset}>Reset</button>
                </div>                
                <p>{intro}</p>
        </div>
    )
}

export default TextArea