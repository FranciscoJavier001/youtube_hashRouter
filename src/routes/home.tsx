import { Link } from 'react-router-dom'

export default function Route(){
    return <>
        <h2 style={{fontSize:44}}>Home</h2>
        <Link to="/about">
            Sobre Nosotros
        </Link>
        <br />
        <Link to="/contact">
            Contacto
        </Link>
    </>
}