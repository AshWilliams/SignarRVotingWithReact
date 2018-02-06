var dataGrilla = [
    {
        Id: 1,
        Nombre: "Robert",
        Apellido: "Rozas"
    },
    {
        Id: 2,
        Nombre: "Juan",
        Apellido: "Ramos"
    },
    {
        Id: 3,
        Nombre: "Ruben",
        Apellido: "Azocar"
    }
];

var GrillaApp = React.createClass({
    getInitialState: function () {
        return { data: dataGrilla };
    },

    componentDidMount: function () {
        
    },

    onClickEditSelected(Id) {
        alert("Editar item " + Id);
    },
    onClickDeleteSelected(Id) {
        alert("Eliminar item " + Id);
    },

    render: function () {
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((obj, index) => <tr>
                        <td>{obj.Nombre}</td>
                        <td>{obj.Apellido}</td>
                        <td><p data-placement="top" data-toggle="tooltip" title="Editar"><button className="btn btn-primary btn-xs" data-title="Editar" onClick={() => this.onClickEditSelected(obj.Id)}><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                        <td><p data-placement="top" data-toggle="tooltip" title="Eliminar"><button className="btn btn-danger btn-xs" data-title="Eliminar" onClick={() => this.onClickDeleteSelected(obj.Id)}><span className="glyphicon glyphicon-trash"></span></button></p></td>
                    </tr>)}
                </tbody>
            </table>
        );
    }

});

React.render(<GrillaApp />, document.getElementById('tableResult'));