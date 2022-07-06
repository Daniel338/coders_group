'use strict';

function objeto_nota(title, content, favorite){
    return {
        title: title,
        content: content,
        favorite: favorite,
    };
};

function mostrar_crear_nota(){

}

const btn__plus = document.querySelector("#footer .btn__plus");
let notas = [];
