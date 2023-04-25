import { Routes, Route } from "react-router-dom"
import { CreatePage } from "./pages/CreatePage/addMusic"


function App() {
  
  return (
    <>
     <Routes>

      <Route path="/create" element={<CreatePage />}/>

     </Routes>
    </>
  )
}

export default App
