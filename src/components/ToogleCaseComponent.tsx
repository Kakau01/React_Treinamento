import React, { Component } from 'react';

interface ToogleCaseComponentProps {
    children: string
    //pode ter 2 valores
    // initialmode: 'lower' | 'upper'
    mode: 'lower' | 'upper'
}

interface ToogleCaseComponentState {
    mode: 'lower' | 'upper'
   
}

class ToogleCaseComponent extends Component<ToogleCaseComponentProps, ToogleCaseComponentState> {
    //props - é  interface
    constructor(props: ToogleCaseComponentProps) {
        super(props);
        this.state = { mode: props.mode}
        //forcar que o contexto seja relamente a nossa classe
        //retorna um contexto atualizado
        this.toogle = this.toogle.bind(this);

    }

    //metodo responsavel pela troca de estado
    protected toogle() {
        this.setState({
            mode: this.state.mode === 'lower' ? 'upper' : 'lower'
        })
    }

    public render() {
        return (
            //adicionando um evento de clique
            <div onClick={this.toogle}>
                <p>
                    {this.state.mode === 'lower'
                        ? this.props.children.toLocaleLowerCase()
                        : this.props.children.toUpperCase()
                    }
                </p>
            </div>
        )
    }
}

export default ToogleCaseComponent;