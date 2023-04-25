import { useState } from "react"
import { api } from "../../utils/api"
import {useNavigate} from "react-router-dom"
import logo from "../../utils/image/logo.png"
import style from "./style.module.css"
import { Link } from "react-router-dom"


export function CreatePage(){
    const[form, setForm] = useState({
        artista: "",
        capa_album: "",
        nome_album: "",
        nome_musica: "",
        link_musica: "",
        opiniao: "",
        genero_musica: ""
    })

    const navigate = useNavigate()
    
    function handleChange(e){
         setForm({...form, [e.target.name]: e.target.value })
    }
    
    async function handleSubmit(e){
        e.preventDefault()

        try{
            await api.post("/webby-musics", {data:{...form}})
            navigate("/")

        }catch(e){
            console.log(e)
        }

    }

    return(
        <>
        <nav >
        <Link to="/">
        <img src={logo} alt="" />
        </Link>
        </nav>

        
       <div className={style.containerPrincipal}>
        
        <div className={style.tituloPrincipal}>  
        <h1>Add your music here! </h1>
        </div> 

        <form  className={style.containerForms}  onSubmit={handleSubmit}>
            <label>Artist:</label>
            <input name="artista" value={form.artista} onChange={handleChange}/>
            <label>Link album cover:</label>
            <input name="capa_album"  value={form.capa_album} onChange={handleChange}/>
            <label>Album name:</label>
            <input name="nome_album"  value={form.nome_album} onChange={handleChange}/>
            <label>Name of the song:</label>
            <input name="nome_musica" value={form.nome_musica} onChange={handleChange}/>
            <label>Music Link:</label>
            <input name="link_musica" value={form.link_musica} onChange={handleChange}/>
            <label>Opinion about the music:</label>
            <input name="opiniao" value={form.opiniao} onChange={handleChange}/>
            <label>Music Genre:</label>
            <input name="genero_musica" value={form.genero_musica} onChange={handleChange}/>

            <button className={style.buttonSend}>Send</button>
        </form>

        </div>
        </>
    )
}