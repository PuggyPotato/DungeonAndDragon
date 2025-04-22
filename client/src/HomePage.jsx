function HomePage(){



    return(
        <>
            <div className="flex justify-center items-center h-screen flex-col font-mono">
                <h1 className="text-7xl">Input Your Name</h1>
                <input className="border-2 w-128 h-16 rounded-lg m-8 text-5xl p-2"></input>
                <button className="border-2 w-64 h-16 rounded-lg text-4xl text-center bg-amber-600">Start Game</button>
            </div>
        </>
    )
}


export default HomePage