import { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import Message from "../Layout/Message"
import styles from './project.module.css'
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton'
import Project_Card from '../Projetos/Project_Card'

function Projects() {

    const [projects, setProjects] = useState([])
    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect (() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            setProjects(data)
          })
          .catch((err) => console.log(err))
    }, []);

    return (
       <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/NovoProjeto" text="Criar projeto"/>
        </div>
        {message && <Message type ="sucess" msg={message}/>}
        <Container customClass="start">
            {projects.length > 0 && 
                projects.map((projeto) => (
                    <Project_Card
                    
                    id={projeto.id}
                    name={projeto.name}
                    budget={projeto.budget}
                    category={projeto.category.name}
                    key={projeto.id} 
                    />
                ))
            }
        </Container>
       </div>
    )
}

export default Projects