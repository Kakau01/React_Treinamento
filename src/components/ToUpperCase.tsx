import React, { Component } from 'react';

interface ToUpperCaseProps {
    children: string
}

//Como classe
// class ToUpperCaseComponent extends Component<ToUpperCaseProps> {
//     render(){
//         return(
//             <div>
//                 <p>{this.props.children.toLocaleUpperCase()}</p>
//             </div>
//         )
//     }
// }

//Como Funcao
const ToUpperCaseComponent = (props: ToUpperCaseProps) => {
    return(
        <div>
            <p>{props.children.toLocaleUpperCase()}</p>
        </div>
    )
}

export default ToUpperCaseComponent;