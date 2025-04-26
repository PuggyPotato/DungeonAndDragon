import { useState } from "react"
import { useSearchParams } from "react-router"



function Game(){
    let [userInput,setUserInput] = useState("")
    let [userTurn,setUserTurn] = useState(true)
    

    function changeInput(e){
        setUserInput(e.target.value);
    }

    function submitInput(e){
        e.preventDefault();
        //Add What To Do With Input Here

        setUserInput("")
        setUserTurn(false)
    }


    return(
        <>
            <div id="player" className="size-8 bg-blue-600 absolute left-[20%] top-[30%]">

            </div>
            <div id="opponent" className="size-8 bg-red-600 absolute right-[20%] top-[30%]">

            </div>
            <div>

                <div id="dialogueBox" className="w-[90%] border-2 absolute bottom-[10%] h-[25%] mx-[5%] rounded-lg">
                    <textarea className="w-full h-full border-2 rounded-lg text-xl px-1" 
                    readOnly={userTurn ? false : true}
                    onChange={changeInput}
                    value={userInput}/>
                    <button className="absolute right-[2%] bottom-[10%] border-2 rounded p-2" onClick={submitInput}>Enter</button>
                </div>

            </div>
        </>
    )
}

export default Game