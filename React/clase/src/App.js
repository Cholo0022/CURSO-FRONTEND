import React, { Component } from 'react';
import RegistroNotas from './components/RegistroNotas'
import ListaNotas from './components/ListaNotas';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <section>
        <RegistroNotas/>
        <ListaNotas/>
      </section>
    );
  }
}
 
export default App;
