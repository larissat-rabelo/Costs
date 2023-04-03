import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src='{logo}' alt="Logo da Costs"/>
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.list}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar