import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import styles from './projeto.module.css'
import Form_Proj from '../Projetos/Form_Proj'
import Message from '../Layout/Message'

function Projeto() {

    //Captura e imprime o valor do id contido na URL
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log())
    }, [id])

function editPost(project) {
    if(project.budget < project.cost) {
        setMessage('O orçamento não pode menor que o custo do projeto')
        setType('error')
        return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
        //Patch atualiza apenas o que for pedido, não toda a entidade
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Projeto atualizado com sucesso')
        setType('sucess')
    })
    .catch(err => console.log(err))
}

function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
}

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar orçamento' : 'Fechar'} 
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span> Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Orçamento total: </span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado: </span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <Form_Proj 
                                    handleSubmit={editPost} 
                                    btnText='Salvar'
                                    projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
export default Projeto