import { api } from "../../utils/api"
import { useState, useEffect } from "react"
import style from "./style.module.css"
import { Link } from "react-router-dom"

export function PreviewMusic() {

    const [music, setMusic] = useState([])

    console.log(music)
    useEffect(()=>{
        async function fetchMusic(){
            try{
                const response = await api.get("/webby-musics"
                );
               
               setMusic(response.data.data)
            }catch(e){
                console.log(e)
            }
 
        }
        fetchMusic();
    }, [])

    return <>
        {music.map((currentElement)=>{
            return <>
                <div className={style.musicPreview}>
                <img src={currentElement.attributes.capa_album}/>
                <Link to={`/webby-musics/${currentElement.id}`}>
                <p>{currentElement.attributes.nome_musica}</p>
                </Link>
                </div>
            </>
        })}
    </>
}