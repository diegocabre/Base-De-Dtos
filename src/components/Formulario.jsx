
import { useState } from 'react'
import Alert from './Alert';

export default function Formulario ({ agregarColaborador }) {
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (datos.nombre.trim() === '' || datos.correo.trim() === '' || datos.edad.trim() === '' || datos.cargo.trim() === '' || datos.telefono.trim() === '') {
            return (
                <Alert tipo="danger" mensaje="Todos los campos son obligatorios" />
            )
        }
        else {
            agregarColaborador(datos);
            setDatos({
                nombre: '',
                correo: '',
                edad: '',
                cargo: '',
                telefono: '',
            });
        }
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" name="nombre" value={datos.nombre} onChange={handleChange} />
            <input type="text" placeholder="Correo" name="correo" value={datos.correo} onChange={handleChange} />
            <input type="text" placeholder="Edad" name="edad" value={datos.edad} onChange={handleChange} />
            <input type="text" placeholder="Cargo" name="cargo" value={datos.cargo} onChange={handleChange} />
            <input type="text" placeholder="Telefono" name="telefono" value={datos.telefono} onChange={handleChange} />
            <button type="submit">Agregar</button>
        </form>
    )
}


