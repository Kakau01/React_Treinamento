import React, { Component } from 'react';

interface LifeCycloComponentProps {
    children: string
    //pode ter 2 valores
    // initialmode: 'lower' | 'upper'
    mode: 'lower' | 'upper'
}

interface LifeCycleComponentState {
    mode: 'lower' | 'upper'
    
}

class LifeCycleComponent extends Component<LifeCycloComponentProps, LifeCycleComponentState> {
    //props - é  interface
    constructor(props: LifeCycloComponentProps) {
        super(props);
        this.state = { mode: props.mode}
        
        

    }

    //metodo estatico
    //cria o estado a partir de propriedades
    //sera executado tanto na hora de montar quanto na hora de atualizar
    //Util para criacao do estado, portando nao precisariamos criar o estado como foi criado dentro do contructor  
    // public static getDerivatedStateFromProps(nextProps:ToogleCaseComponentProps, nextState: ToogleCaseComponentState): Partial<ToogleCaseComponentState>{
    //     return{
    //         mode: nextState.mode
    //     }
    // }

    //metodo responsavel pela troca de estado
    protected toogle = () => {
        this.setState({
            mode: this.state.mode === 'lower' ? 'upper' : 'lower'
        })
    }

    render() {
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

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
}

export default LifeCycleComponent;