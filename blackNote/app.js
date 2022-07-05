notas.push(new Nota("Primer nota", "Compra", true, "nota1"));
notas.push(new Nota("Segunda nota", "Futbol", false, "nota2"))
console.log("agregue 2 notas");


const mostrarFormularioNota =() =>{
    document.getElementById("notaFormulario").style.display = "block";
}

const cerrarFormularioNota = () =>{
    document.getElementById("notaFormulario").style.display = "none";
}

const agregarNota = ()=>{
    console.log("agregar notas listo");
    let formulario = document.forms["notaFormulario"];
    let titulo = formulario["tituloInput"];
    let categoria = formulario["categoriaInput"];
    let favorito = formulario["favoritoSelect"];
    let nota = formulario["textoArea"];

    notas.push(new Nota(titulo.value, categoria.value, favorito.value, nota.value));
    console.log(notas);

    document.getElementById("notaFormulario").style.display = "none";
}