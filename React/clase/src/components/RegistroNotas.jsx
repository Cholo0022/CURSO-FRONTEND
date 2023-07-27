import { Component } from "react";

class RegistoNotas extends Component {
    state = {  } 
    render() { 
        return (
            <section>
                <form>
                    <input type="text"  placeholder="Titulo"/>
                    <textarea placeholder="Ingrese la nota" />
                    <button>Registrar Nota</button>
                </form>
            </section>
        );
    }
}
 
export default RegistoNotas;
