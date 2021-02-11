import React from 'react';

import LifeCycleComponent from '../components/LifeCycleComponent';
import ToLowerCaseComponent from '../components/ToLowerCaseComponent';
import ToogleCaseComponent from '../components/ToogleCaseComponent';
import ToUpperCaseComponent from '../components/ToUpperCase';


//Acessando propriedades:Objeto
const App = () => {
    console.log();
    //mostrará que é um objeto de fato
    return (
        <>
            <ToLowerCaseComponent>
                Hello WORLD!
            </ToLowerCaseComponent>

            <ToUpperCaseComponent>
                hello world
            </ToUpperCaseComponent>

            <ToogleCaseComponent mode='lower' >
                hello
                
            </ToogleCaseComponent>
            <LifeCycleComponent mode="lower">
                Ciclo de Vida
            </LifeCycleComponent>
            
        </>

    )
}

export default App;