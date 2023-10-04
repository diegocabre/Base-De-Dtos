export default function Buscador ({handleBuscador}) {
    return (
        <div>
            <input type="text" placeholder="Buscar" onChange={handleBuscador} />
        </div>
    )
} 
