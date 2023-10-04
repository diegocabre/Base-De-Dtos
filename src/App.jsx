import './App.css'

import { BaseColaboradores } from './BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import { useState } from 'react';

let index = BaseColaboradores.length
function App() {
    const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
    const agregarColaborador = (newColaborador) => {
        setColaboradores(colaborador => [...colaborador, { ...newColaborador, id: index++ }]);
        setAlerta({ tipo: 'success', mensaje: 'Colaborador agregado' });
    }

    const eliminarColaborador = (id) => {
        setColaboradores(colaborador => colaborador.filter(colaborador => colaborador.id !== id));
        setAlerta({ tipo: 'success', mensaje: 'Colaborador eliminado' });
    }

    const [alerta, setAlerta] = useState(null);

    const handleAlerta = ({ tipo, mensaje }) => {
        setAlerta({ tipo, mensaje });
    }

    const [buscador, setBuscador] = useState('');

    const handleBuscador = e => {
        setBuscador(e.target.value);
    }

    function filtrarColaboradores(colaboradores) {
        const filtro = buscador.toLowerCase();
        return colaboradores.filter(colaborador => {
            return colaborador.nombre.toLowerCase().includes(filtro) || colaborador.correo.toLowerCase().includes(filtro) || colaborador.cargo.toLowerCase().includes(filtro) || colaborador.edad.toString().includes(filtro) || colaborador.telefono.toString().includes(filtro) || colaborador.id.toString().includes(filtro);
        })
    }
    return (
        <div className="App">
            <div>
                <Buscador handleBuscador={handleBuscador} />
                <h1 className="tituloListado">Base de datos de Colaboradores</h1>
                <Listado colaboradores={filtrarColaboradores(colaboradores)} eliminarColaborador={eliminarColaborador} />
            </div>
            <div>
                <Formulario agregarColaborador={agregarColaborador} handleAlerta={handleAlerta} />
                {alerta ? <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} /> : null}
            </div>
        </div>
    )
}

export default App
