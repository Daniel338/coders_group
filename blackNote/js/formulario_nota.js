console.log("Js FORMULARIO NOTA CARGADO");

// const formulario_modal = document.querySelector("formulario_nota");
// no sirve con selecto clase
document.querySelector(".mostrar_formulario-btn").addEventListener("click", ()=>{
    document.getElementById("formlulario_id").classList.toggle("formulario_nota--show"); 
} )



const agregarNota = ()=>{
    console.log("agregar notas listo");
    let formulario = document.forms["formulario"];

    let titulo = formulario["tituloInput"];
    let categoria = formulario["categoriaInput"];
    let favorito = formulario["favoritoCheckbox"];
    let nota = formulario["textoArea"];

    function favoritoTrueOrFalse(favorito){
        if(favorito.checked){
            return true;
        }else{
            return false;
        }
    }

    notas.push(new Nota(titulo.value, categoria.value, favoritoTrueOrFalse(favorito), nota.value));
    console.log(notas);
    mostrarNotas(notas);
}

const crearNotaHTML = (nota) => {
    return `<article class="note1">
    <header>
        <ion-icon name="star-outline" class="icon favorite"></ion-icon>
        <h3 class="categoria">${nota.categoria}</h3>
    </header>
    <div onclick="abrirNota(ponerIndiceNotaHTML())">
        <h3 class="titulo">${nota.titulo}</h3>
    </div>
    <footer>
        <button>
            <ion-icon name="checkmark-circle-outline" class="icon check"></ion-icon>
        </button>
    </footer>
</article>
`;
}
const ponerIndiceNotaHTML = () =>{ //con esto le agrego un indice a cada nota en
    //la grilla para despues llamar a la funcion mostrar nota con su indice
return (notas.length-1);
}
