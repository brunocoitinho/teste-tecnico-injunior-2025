import booksByCategory from '../books.js';

const txtResultado = document.getElementById("resultado");
let autores = authors()


txtResultado.innerHTML = "<ul>"
for (let i = 0; i < autores.length; i++) {
    txtResultado.innerHTML += `<li>${autores[i]}</li>`;
}
txtResultado.innerHTML += '</ul>'


function authors(){

    let allCategoryBooks = []
    let aux = []
    let temp = []
    
    for (let i = 0; i < booksByCategory.length; i++) {
        allCategoryBooks.push(singleCategoryBooksArray(`${booksByCategory[i].category}`))
    }
    
    for (let i = 0; i < allCategoryBooks.length-1; i++) {
        temp = allCategoryBooks[i].concat(allCategoryBooks[i+1])
        aux = aux.concat(temp) 
    }
    
    let authors = aux.map(e => e.author)
    return Array.from(new Set (authors))
}


function singleCategoryBooksArray(cat){
    let aux = []
    let allBooks = []
    for (let i = 0; i < booksByCategory.length; i++) {
        if(booksByCategory[i].category == cat){
            allBooks = aux.concat(booksByCategory[i].books)
            aux = allBooks.splice()
        }
    }
    return allBooks
}


/*
Escreva uma função chamada authors que retorne um array com os
nomes de todos os autores presentes no objeto booksByCategory,
desconsiderando autores repetidos.
*/