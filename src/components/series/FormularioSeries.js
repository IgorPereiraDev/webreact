import React, { Component } from 'react';

class FormularioSeries extends Component{

    constructor(){
        super()
    }

    inputHandler = (e) => {
        const { name, value } = e.target;
        this.props.inputHandler(name, value)
        // this.setState({[name]: value});
    }
    
    enviaDados = (e) =>{
        e.preventDefault();
        this.props.enviaDados(this.state);
        this.setState(this.stateInicial)
    }

    render(){
        const { serie } = this.props;
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de series
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={this.enviaDados}>
                        <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" type="text" id="nome" name="nome" value={serie.nome} onChange={this.inputHandler}></input>

                                <label htmlFor="lancamento">Ano de lancamento</label>
                                <input className="form-control" type="text" id="lancamento" name="ano_lancamento" value={serie.ano_lancamento} onChange={this.inputHandler}></input>

                                <label htmlFor="temporadas">Temporadas</label>
                                <input className="form-control" type="text" id="temporadas" name="temporadas" value={serie.temporadas} onChange={this.inputHandler}></input>

                                <label htmlFor="sinopse">Sinopse</label>
                                <textarea className="form-control" id="sinopse" name="sinopse" value={serie.sinopse} onChange={this.inputHandler}></textarea>

                                <button className="btn btn-success form-control mt-2" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default FormularioSeries