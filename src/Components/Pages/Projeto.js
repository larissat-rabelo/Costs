import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../Layout/Loading'
//import styles from './projeto.module.css'

function Projeto() {

    //Captura e imprime o valor do id contido na URL
    const {id} = useParams()
    const [project, setProject] = useState([])
    
    useEffect(() => {
        fetch(`http:localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log)
    }, [id])

    return <> {project.name ? <p>{project.name}</p> : <Loading />} </>
}

export default Projeto