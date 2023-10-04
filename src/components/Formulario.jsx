
import { useState } from 'react'
export default function Formulario({ agregarColaborador, handleAlerta }) {
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (datos.nombre.trim() === '' || datos.correo.trim() === '' || datos.edad.trim() === '' || datos.cargo.trim() === '' || datos.telefono.trim() === '') {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'Todos los campos son obligatorios'
            })
            return;
        }
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(datos.correo)) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'El correo no es valido'
            })
            return;
        }

        if (datos.edad < 0 || isNaN(datos.edad)) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'La edad debe ser un numero positivo'
            })
            return;
        }

        if (datos.telefono < 0 || isNaN(datos.telefono)) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'El telefono debe ser un numero positivo'
            })
            return;
        }
        agregarColaborador({ ...datos });
        setDatos({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: '',
        })
    }

    return (
        <div>
            <h1 className="tituloFormulario">Agrega un Colaborador</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="Escribe tu Nombre" className="form-control" name="nombre" value={datos.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Escribe tu Correo" className="form-control" name="correo" value={datos.correo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Escribe tu Edad" className="form-control" name="edad" value={datos.edad} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Escribe tu Cargo" className="form-control" name="cargo" value={datos.cargo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Escribe tu Telefono" className="form-control" name="telefono" value={datos.telefono} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}
