import React from "react"

export class Counter extends React.Component {
    constructor() {
        super()
        // this.contador = 0
        this.state = {
            contador: 0,
            nome: '',
            senha: ''
        }
    }

    render() {
        return (
            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                <h1>{this.state.contador}</h1>

                <div>
                    <button onClick={() => {
                        this.setState({
                            contador: this.state.contador + 1
                        })
                    }}>Aumentar</button>

                    <button onClick={() => {
                        this.setState({
                            contador: this.state.contador - 1
                        })
                    }}>Diminuir</button>
                </div>
                <form style={{ marginTop: "40px", }}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={this.state.nome}
                        onChange={(event) => {
                            this.setState({
                                nome: event.target.value
                            })
                        }}
                    />

                    <input 
                        type="password"
                        placeholder="Senha"
                        value={this.state.senha} 
                        onChange={(event) => {
                            this.setState({
                                senha: event.target.value})
                        }}
                    />

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}