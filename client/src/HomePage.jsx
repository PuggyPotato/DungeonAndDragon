import { useState } from "react";
import { useNavigate } from "react-router"


function HomePage(){
    const [username,setUsername] = useState("")
    const navigate = useNavigate();

    function enterGame(){
        navigate("/game");
        
    }


    return(
        <>
            <form className="flex justify-center items-center h-screen flex-col font-mono" onSubmit={enterGame}>
                <h1 className="text-7xl">Input Your Name</h1>
                <input className="border-2 w-128 h-16 rounded-lg m-8 text-5xl p-2 text-center" value={username} onChange={(e) =>setUsername(e.target.value)}></input>
                <button className="border-2 w-64 h-16 rounded-lg text-4xl text-center bg-amber-600 cursor-pointer" type="submit" >Start Game</button>
            </form>
        </>
    )
}


export default HomePage