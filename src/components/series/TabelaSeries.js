import React, { Component } from 'react';
import './TabelaSeries.css'

const ListaSeries = (props) => {

    return(
        <div className="card-body card-body-flex">
            {props.series.map(serie => {
                return (
                    <div className="card card-serie bg-dark text-white" key={serie.id}>
                        <div className="card-header" >
                            <h5 className="card-title text-center">{serie.nome}</h5>
                            <h6 className="card-title text-muted mb-0">{serie.ano_lancamento}</h6>
                        </div>
                        <div className="card-body">
                            <img src="/logo192.png" className="card-img"/>
                        </div>
                        <div className="card-footer">
                            {serie.temporadas}
                            {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                            <br/>
                            <a href="#">Sinopse</a>
                            <br/>
                            <div className="text-center mt-1" onClick={() => {
                                if(window.confirm('Confirma a exclusão'))
                                props.deleta(serie.id)
                                }}>
                                <button className="btn btn-outline-danger btn-sm mr-2 p-1">Delete</button>
                                <button className="btn btn-outline-warning btn-sm p-1">Editar</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

class TabelaSeries extends Component{

    render (){

        const { series, deleta } = this.props

        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="text-center">Lista de series</h5>
                </div>
                    <ListaSeries series={series} deleta={deleta}/>
			</div>
        )
    }
}

export default TabelaSeries