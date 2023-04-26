import { Routes, Route } from "react-router-dom"
import { CreatePage } from "./pages/CreatePage/addMusic"
import Home from "./components/Home/Home"
import { MusicDetails } from "./pages/MusicDetails/details"
import { EditPage } from "./pages/Edit/editPage"




function App() {
  
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<CreatePage />}/>
      <Route path="/webby-musics/:musicId" element={<MusicDetails />}/>
      <Route path="/edit/:musicId" element={<EditPage />}/>
     </Routes>
    </>
  )
}

export default App
