import HomePage from "./HomePage"
import Game from "./Game"
import {BrowserRouter,Route,Routes} from "react-router-dom"


function App(){





  return(
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path ="/" element={<HomePage/>}></Route>
            <Route path ="/game" element={<Game/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App