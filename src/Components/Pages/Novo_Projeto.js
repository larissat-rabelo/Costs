import Form_Proj from '../Projetos/Form_Proj'
import styles from './Novo_Projeto.module.css'

function Novo_Projeto() {
    return (
        <div className={styles.novoproj_container}>
             <h1>Criar projeto</h1>
             <p>Crie seu projeto para depois adicionar os serviços</p>
             <Form_Proj btnText="Criar projeto"/>
        </div>
       
    )
}

export default Novo_Projeto