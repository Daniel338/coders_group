console.log("js Notas CARGADO");

let notas = [];

class Nota{
    static contadorNotas = 0;

    constructor(titulo, categoria, favorito, nota){
        this._id = ++Nota.contadorNotas;
        this._titulo = titulo;
        this._categoria = categoria;
        this._favorito = favorito;
        this._nota = nota;
        this._fechaCreacion = new Date();
    }
    get id(){
        return this._id;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this._titulo = titulo;
    }
    get categoria(){
        return this._categoria;
    }
    set categoria(categoria){
        this._categoria = categoria;
    }
    get favorito(){
        return this._favorito;
    }
    set favorito(favorito){
        this._favorito = favorito;
    }
    get nota(){
        return this._nota;
    }
    set nota(nota){
        this._nota;
    }
    get fechaCreacion(){
        return this._fechaCreacion;
    }
    set fechaCreacion(fechaCreacion){
        this._fechaCreacion = fechaCreacion;
    }
}


