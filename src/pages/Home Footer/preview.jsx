import { api } from "../../utils/api"
import { useState, useEffect } from "react"
import style from "./style.module.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";

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
            <div className="m-3 p-2">
                <Card style={{ width: '18rem' }} className={style.musicPreview}>
                    <Card.Img variant="top" src={currentElement.attributes.capa_album}/>
                    <Card.Body>
                    <Card.Title>{currentElement.attributes.nome_musica}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Link to={`/webby-musics/${currentElement.id}`}>
                    <Button variant="dark">Discover this song!</Button>
                    </Link>
                    </Card.Body>
                </Card>
                {/* <div className={style.musicPreview}> */}
                {/* <img src={currentElement.attributes.capa_album}/> */}
                {/* <Link className="text-decoration-none" to={`/webby-musics/${currentElement.id}`}> */}
                {/* <p>{currentElement.attributes.nome_musica}</p> */}
                {/* </Link> */}
                {/* </div> */}
            </div>
            
            </>
        })}
    </>
}