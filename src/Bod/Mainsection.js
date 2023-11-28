function Mainsection (props) {
    return (
       
        <div className="main-block">
            <div className="container">
                <h4>Скажи Привет {props.names}</h4>
                <p>Цвет волос: {props.hair} </p>
                <p>Твоя профессия- {props.proffession} </p>
            </div>
        </div>
    )
}

export default Mainsection ;

