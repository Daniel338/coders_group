console.log("Js Notas CARGADO");

let notas = [];



class Nota{
    static contadorNotas = 0;

    constructor(titulo, categoria, favorito, nota){
        this._id = ++Nota.contadorNotas;
        this._titulo = titulo;
        this._categoria = categoria;
        this._favorito = favorito;
        this._nota = nota;
        let fechaCompleta = new Date();
        this._fechaCreacion = fechaCompleta.getDate()+"-"+fechaCompleta.getMonth()+"-"+fechaCompleta.getFullYear()+"-"+fechaCompleta.getHours()+":"+fechaCompleta.getMinutes()+":"+fechaCompleta.getSeconds();
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
notas.push(new Nota("titulo8", "categoria6", true, "nota8"));
notas.push(new Nota("titulo2", "categoria8", false, "nota2"));
notas.push(new Nota("titulo1", "categoria7", true, "nota1"));
notas.push(new Nota("titulo3", "categoria9", false, "nota3"));


const mostrarNotas = (listaDeNotas)=> {
    let textoHTML = "";

    if(listaDeNotas.length != 0){
        for(let nota of listaDeNotas){
            textoHTML +=  crearNotaHTML(nota);
        }
    }

    document.getElementById("row_notas").innerHTML = textoHTML;
}

