import './App.css'
import {Formulario} from "./components/Formulario";
import {Listado} from "./components/Listado"
import {Buscador} from "./components/Buscador"
import {Alert} from "./components/Alert"
import {BaseColaboradores} from "./BaseColaboradores"



<>
<Formulario
          agregarColaborador={agregarColaborador}
          alertMessage={appAlertMessage}
          alertType={appAlertType}
        />
<Listado/>
<Buscador/>
<Alert/>

</>
export default App
