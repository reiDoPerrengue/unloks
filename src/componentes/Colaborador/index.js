import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo, descricao, corDeFundo}) => {
    return(
        <div className="colaborador">
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src= {imagem} alt={nome} title={descricao}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador