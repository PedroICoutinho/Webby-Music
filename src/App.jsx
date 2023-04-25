import { Routes, Route } from "react-router-dom"
import { CreatePage } from "./pages/CreatePage/addMusic"
import Home from "./components/Home/Home"




function App() {
  
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<CreatePage />}/>

     </Routes>
    </>
  )
}

export default App
