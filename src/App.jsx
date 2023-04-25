import { Routes, Route } from "react-router-dom"
import { CreatePage } from "./pages/CreatePage/addMusic"
import Home from "./components/Home/Home"




function App() {
  
  return (
    <>
    <Home/>
     <Routes>
      
      <Route path="/create" element={<CreatePage />}/>

     </Routes>
    </>
  )
}

export default App
