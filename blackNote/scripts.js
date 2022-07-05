// rama martin
/*
Como usuario de la aplicación. 
Me gastaría poder darle mayor prioridad a una nota. 
Para saber que entre sus notas favoritas es mas importante.

la que se debe realizar con mayor importancia.
Para poder tener un orden de prioridad en mis tareas.
ordenar su notas favoritas por prioridad.

Como realizarlo = las notas favoritas con un nivel entre 1 a 10. y 
que sola mente pueda seleccionar esto cuando tenga notas favoritos. 
Si no tiene favoritos no darle la opciones de puntuar.
*/

class Nota{
    
    check = false;
    title = '';
    category = '';
    favorite = false;
    priority = NaN;

    constructor(title, category, check = false, favorite = false) {
        this.id = Nota.id + 1;
        this.check = check;
        this.title = title;
        this.category = category;
        this.favorite = favorite;
    }

    add_to_favorites() {
        this.favorite = true;
    }


}

Nota.id=0;

nota1 = new Nota('titulo 1', 'no hay 1');
nota2 = new Nota('titulo 2', 'no hay 2', true);
nota3 = new Nota('titulo 3', 'no hay 3', true, true);
nota4 = new Nota('titulo 4', 'no hay 4');
nota5 = new Nota('titulo 5', 'no hay 5', true, true);
nota6 = new Nota('titulo 6', 'no hay 6', true, true);
nota7 = new Nota('titulo 7', 'no hay 7', true);
nota8 = new Nota('titulo 8', 'no hay 8');

const zone_notas = document.getElementById('notas')

var array_notas = [nota1, nota2, nota3, nota4, nota5, nota5, nota7, nota8]

array_notas.forEach(element => {
    zone_notas.innerHTML += '<article class="note1" tabindex="4">\
        <header>\
            <ion-icon onclick="5" name="star-outline" class="icon favorite"></ion-icon>\
            <h3 class="categoria">'+element.category+'</h3>\
        </header>\
        <h3 class="titulo">'+element.title+'</h3>\
        <footer>\
            <button>\
                <ion-icon name="checkmark-circle-outline" class="icon check"></ion-icon>\
            </button>\
        </footer>\
    </article>'
});

function chance_favorite(id){
    array_notas[id].add_to_favorites();
}

array_notas.forEach(element =>{
    console.log(element)
})