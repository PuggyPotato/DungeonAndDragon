import { useState } from "react"
import { useSearchParams } from "react-router"



function Game(){
    let [userInput,setUserInput] = useState("");
    let [userTurn,setUserTurn] = useState(false);
    let [displayedText,setDisplayedText] = useState("Welcome Challanger,You Will Be Fighting Me Today!");
    let [countDialogue,setCountDialogue] = useState(0)

    const allDialogue = ["Second Message",3,4,5]

    function changeInput(e){
        setUserInput(e.target.value);
    }

    function submitInput(e){
        e.preventDefault();
        //Add What To Do With Input Here

        setUserInput("")
        setUserTurn(false)
        setDisplayedText(allDialogue[countDialogue])
        setCountDialogue(countDialogue + 1)
        
    }

    function nextDialogue(e){
        e.preventDefault();
        setUserTurn(true)
    }

    return(
        <>
            <div id="player" className="size-8 bg-blue-600 absolute left-[20%] top-[30%]">

            </div>
            <div id="opponent" className="size-8 bg-red-600 absolute right-[20%] top-[30%]">

            </div>
            <div>

                <div id="dialogueBox" className="w-[90%] border-2 absolute bottom-[10%] h-[25%] mx-[5%] rounded-lg">
                    <textarea className={`w-full h-full border-2 rounded-lg 
                                        text-xl px-1 absolute bottom-0 
                                        left-0 z-30 pointer-events-none ${userTurn? "hidden" : ""}`} 
                                        readOnly 
                                        value={displayedText}
                                        />
                    <textarea className="w-full h-full border-2 rounded-lg text-xl px-1 z-20" 
                    readOnly={userTurn ? false : true}
                    onChange={changeInput}
                    value={userInput}/>
                    <button className={`absolute right-[2%] bottom-[10%] border-2 rounded p-2 
                    ${!userTurn ? "hidden" : ""}`} 
                    onClick={submitInput}
                    >Enter</button>
                    <button 
                    className={`absolute right-[0.5%] bottom-[2.5%] p-2 z-20 cursor-pointer 
                    ${userTurn ? "hidden" : ""}`}
                    onClick={nextDialogue}>Click To Continue {">>"}</button>
                </div>

            </div>
        </>
    )
}

export default Game