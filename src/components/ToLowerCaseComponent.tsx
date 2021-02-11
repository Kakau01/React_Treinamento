import React, { Component } from 'react';

//será passada para o primeiro argumento da classe
interface ToLowerCaseComponentProps {
    children: string;
}

class ToLowerCaseComponent extends Component<ToLowerCaseComponentProps> {
    render() {
        
        return(
            <div>
                <p>{this.props.children.toLocaleLowerCase()}</p>
            </div>
        )
    }
}

export default ToLowerCaseComponent;