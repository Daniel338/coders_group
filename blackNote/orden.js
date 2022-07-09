"use strict";

console.log("Js ORDEN CARGADO");


document.querySelector(".filtro-btn").addEventListener("click", () => {
    document.getElementById("filtro_id").classList.toggle("filtro--show");
})


const ordenarPorTitulo = () => {
    notas.sort((a,b) => {
        
        if(a.titulo > b.titulo){
            console.log(a.titulo +" > "+b.titulo);
            return 1;
        }
        if(b.titulo > a.titulo){
            console.log(b.titulo +" > "+b.titulo);
            return -1;
        }
        return 0;
    })
    console.log(notas);
    mostrarNotas(notas);
}
const ordenarPorCategoria = () => {
    notas.sort((a, b) => a.categoria.localeCompare(b.categoria));
        
    //     if(a.categoria > b.categoria){
    //         console.log(a.categoria +" > "+b.categoria);
    //         return 1;
    //     }
    //     if(b.categoria > a.categoria){
    //         console.log(b.categoria +" > "+b.categoria);
    //         return -1;
    //     }
    //     return 0;
    // })
    mostrarNotas(notas);
}
const ordenarPorFecha = () => {
    notas.sort((a,b) => {
        
        if(a.fechaCreacion > b.fechaCreacion){
            console.log(a.fechaCreacion +" > "+b.fechaCreacion);
            return 1;
        }
        if(b.fechaCreacion > a.fechaCreacion){
            console.log(b.fechaCreacion +" > "+b.fechaCreacion);
            return -1;
        }
        return 0;
    })
    mostrarNotas(notas);
}
document.querySelector(".filtroTitulo").addEventListener("click", ordenarPorTitulo);
document.querySelector(".filtroCategoria").addEventListener("click", ordenarPorCategoria);
document.querySelector(".filtroFecha").addEventListener("click", ordenarPorFecha);



