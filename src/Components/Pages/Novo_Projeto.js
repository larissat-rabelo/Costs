import { useNavigate } from 'react-router-dom'
import Form_Proj from '../Projetos/Form_Proj'
import styles from './Novo_Projeto.module.css'

function Novo_Projeto() {
    const navigate = useNavigate()

    function createPost(project) {

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            

            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'}})
        })
        .catch((err) => console.log(err)) 
    }

    return (
        <div className={styles.novoproj_container}>
             <h1>Criar projeto</h1>
             <p>Crie seu projeto para depois adicionar os serviços</p>
             <Form_Proj handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
       
    )
}

export default Novo_Projeto