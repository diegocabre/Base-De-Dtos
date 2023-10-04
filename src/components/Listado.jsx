export default function Listado({colaboradores, eliminarColaborador}) {

    if (colaboradores.length === 0) {
        return <p className="alert alert-info">No hay colaboradores en la base de datos</p>
    } else {
    return (
        <table className="table" border={"1"}>
            <thead className="table-info">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador, index) => (
                    <tr key={index}>
                        <td>{colaborador.id}</td>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td><button type="button" className="btn btn-danger" onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
    }
}