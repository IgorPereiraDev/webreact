import React, { Component } from 'react';

class FormularioSeries extends Component{

    constructor(){
        super()
        this.stateInicial = {
            nome: '',
            ano_lancamento: '',
            temporadas: '',
            sinopse: ''
        }

        this.state = this.stateInicial
    }

    inputHandler = (e) => {
        const { name, value } = e.target;    
        this.setState({[name]: value});
    }
    
    enviaDados = (e) =>{
        e.preventDefault();
        this.props.enviaDados(this.state);
        this.setState(this.stateInicial)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de series
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={this.enviaDados}>
                        <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" type="text" id="nome" name="nome" value={this.state.nome} onChange={this.inputHandler}></input>

                                <label htmlFor="lancamento">Ano de lancamento</label>
                                <input className="form-control" type="text" id="lancamento" name="ano_lancamento" value={this.state.ano_lancamento} onChange={this.inputHandler}></input>

                                <label htmlFor="temporadas">Temporadas</label>
                                <input className="form-control" type="text" id="temporadas" name="temporadas" value={this.state.temporadas} onChange={this.inputHandler}></input>

                                <label htmlFor="sinopse">Sinopse</label>
                                <textarea className="form-control" id="sinopse" name="sinopse" value={this.state.sinopse} onChange={this.inputHandler}></textarea>

                                <button className="btn btn-success form-control mt-2" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default FormularioSeries