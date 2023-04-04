import styles from './Form_Proj.module.css'
import Input from '../Form/Input.js'
import Select from '../Form/Select'
import SubmitBtn from '../Form/SubmitBtn'

function Form_Proj({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number"
                text="Orçamento"
                name="budget"
                placeholder="Insira o orçamento do projeto"    
            />
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default Form_Proj