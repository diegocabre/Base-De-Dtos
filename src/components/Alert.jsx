export default function Alert({ tipo, mensaje }) {
    return (
        <div className={`alert alert-${tipo}`} role="alert">
            {mensaje}
        </div>
    )
}