
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

        if (datos.edad < 18) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'El colaborador debe ser mayor de 18 años'
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
            <img src="./src/assets/img/Colaboradores.jpg" alt="" className="img-fluid" style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="Armando Perez" className="nombre" name="nombre" value={datos.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="tucorreo@correo.com" className="email" name="correo" value={datos.correo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" maxLength={2} minLength={2} pattern='[0-9]*' placeholder="Escribe tu Edad" className="edad" name="edad" value={datos.edad} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Desarrollador" className="cargo" name="cargo" value={datos.cargo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="text" maxLength={9} minLength={9} pattern='[0-9]*' placeholder="987654321" className="telefono" name="telefono" value={datos.telefono} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}
