import { useParams, useNavigate, Link } from "react-router-dom"
import {useState, useEffect} from "react"
import {api} from "../../utils/api"
import style from "./style.module.css"
import Footer from "../../components/Footer/Footer"
import NeoNavbar from "../../components/NeoNavbar/NeoNavbar"

export function MusicDetails(){
    const {musicId} = useParams()

    const [music, setMusic]= useState({attributes: {} })
    
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchMusic(){
            try{
                const response = await api.get(`/webby-musics/${musicId}`)
                
                setMusic(response.data.data)
            }catch(e){
                console.log(e);
            }
        }
        fetchMusic();
    }, []);

    async function handleDelete(){
        await api.delete(`/webby-musics/${musicId}`)
        navigate("/");
    }

    return( <>
    <NeoNavbar/>

    <div className={style.boxItens}>
        <h1>Artist:</h1>
        <p>{music.attributes.artista}</p>
    </div>

    <div className={style.boxItens}>
        <h1>Name of the song:</h1>
        <p>{music.attributes.nome_musica}</p>
    </div>

    <div className={style.boxItens}>
        <h1>Album name:</h1>
        <p>{music.attributes.nome_album}</p>
    </div>

    <div className={style.boxItens}>
        <h1>Album cover:</h1>
        <img src={music.attributes.capa_album} alt="Album cover" />
    </div>

    <div className={style.boxItens}>
        <h1>Opinion about the music:</h1>
        <p>{music.attributes.opiniao}</p>
    </div>

    <div className={style.boxItens}>
        <h1>Music link:</h1>
        <Link className="text-decoration-none" to={music.attributes.link_musica}><p>{music.attributes.link_musica}</p></Link>
    </div>

    <div className={style.boxItens}>
        <h1>Music Genre:</h1>
        <p>{music.attributes.genero_musica}</p>
    </div>

    <div className={style.buttonFlex}>
        <Link className="text-decoration-none" to={`/edit/${musicId}`}>
        <button className={style.buttonEdit}>Edit</button>
        </Link>
        <button onClick={handleDelete}  className={style.buttonDelete}>Delete</button>
    </div>
    <Footer/>
    </>
    )
}