import booksByCategory from '../books.js';

const formBiblioteca = document.getElementById("form-biblioteca");
const selectBiblioteca = document.getElementById("entrada-biblioteca");
const txtResultado = document.getElementById("resultado");


selectBiblioteca.innerHTML +=`<option value="todas">Mostrar todas</option>`

for (let i = 0; i < booksByCategory.length; i++) {
    selectBiblioteca.innerHTML +=`<option value="${booksByCategory[i].category}">${booksByCategory[i].category}</option>`
}


formBiblioteca.addEventListener("submit", function (e) {
    e.preventDefault();
    if(selectBiblioteca.value == 'todas'){
        let objCat = countBooksInCategory()
        for (let i = 0; i < booksByCategory.length; i++) {
            txtResultado.innerHTML += `<p>${booksByCategory[i].category}: ${objCat[booksByCategory[i].category]} livros</p>`
        }
        
    }else{
        let cont = singleCategoryBooks(`${selectBiblioteca.value}`)
        txtResultado.innerHTML = `<p>A categoria ${selectBiblioteca.value} possui ${cont} livros</p>`
    }
});


function singleCategoryBooks(cat){
    for (let i = 0; i < booksByCategory.length; i++) {
        if(booksByCategory[i].category == cat){
            return booksByCategory[i].books.length
        }
    }
    return 0
}

function countBooksInCategory(){
    let totalPerCategory = {}
    for (let i = 0; i < booksByCategory.length; i++) {
        let cat = booksByCategory[i].category
        totalPerCategory[`${cat}`] = singleCategoryBooks(`${cat}`)
    }
    return totalPerCategory
}

/*
retorne um objeto com o nome
da categoria como chave e a contagem de livros como valor.
*/