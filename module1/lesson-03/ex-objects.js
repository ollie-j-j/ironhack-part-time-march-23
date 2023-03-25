// Create a fruit object with properties name, color, score, price, quantity
const fruit1 = {
    name: 'banana',
    color: 'yellow',
    score: 4,
    price: 2,
    quantity: '1kg', // 5
    reviews: ['amazing', 'delicious','to die for']
}

console.log(fruit1.reviews)

const fruit2 = {
    name: 'mango',
    color: 'green',
    score: 4.5,
    price: 4,
    quantity: '1kg' // 5
}

const fruit3 = {
    name: 'strawberry',
    color: 'red',
    score: 2,
    price: 3,
    quantity: '1kg' // 5
}
 // [0,1,2] index positions
 // inventory.length = 3
const fruitCollection= [fruit1, fruit2, fruit3]

const book1 = {
        title: 'The Art Of War',
        price: 7,
        genres: ['Strategy', 'Personal development']
}

const book2 = {
    title: 'Give and Take',
    price: 11,
    genres: ['Philosophy', 'Personal development']
}

const book3 = {
    title: 'Never Split The Difference',
    price: 11,
    genres: ['Strategy', 'Personal development']
}

const book4 = {
    title: '12 rules for Life',
    price: 12,
    genres: ['Philosophy', 'Personal development']
}



const bookCollection = [book1, book2, book3, book4] // array of objects



// let fruitNames = ''
// for(let i = inventory.length - 1; i >= 0; i--){ // i = i -1
//     fruitNames += `${inventory[i].name},`;
// }
// console.log(fruitNames)

//Check that I have at least 4 as a score for my fruits

const checkScore = fruitCollection.every(item => item.score >= 4);
console.log('checkScore', checkScore)

fruitCollection.forEach(fruit => console.log(fruit.color))

// Create a function which returns the average price for fruits

// function generateAvg(){
//     let sum = 0;//

//     for(let i = 0; i < inventory.length; i++){ // i = i + 1
//             sum += inventory[i].price
//     }
//     return sum/inventory.length;
// }

// console.log('generateAvg', generateAvg());

function generateAvg(items){
// Make the sum of the prices
let sum = 0;

for(let i =0; i < items.length; i++){
    sum += items[i].price
}
// Divide the sum by the length of the items
return sum/items.length
}


const book6 = {
    name: 'test',
    price: '14',
    genres: ['Other']
}

bookCollection.push(book6)

// console.log('fruitCollection', generateAvg(fruitCollection));
// console.log('bookCollection', generateAvg(bookCollection));

// Create a function that filters books based on their genres
// 1. Get an input with the genre that I'm looking for
// 2. Go over the list of books
// 3. Return the books that include the genre that I'm looking for
const book5 = {
    title: 'Third Culture Kid',
    price: 12,
    genres: ['Philosophy', 'Personal development']
}
bookCollection.push(book5)

function filterByGenre(books, genre){ // Get an input with the genre that I'm looking for

    let filteredBooks = [];

    for(let i = 0; i < books.length; i++){//  Go over the list of books
       if( books[i].genres.includes(genre)){
        filteredBooks.push(books[i])
       }
    }
    return {
        numberOfBooks: filteredBooks.length,
        books: filteredBooks
    };

}
const filterStrategyBooks = filterByGenre(bookCollection, 'Strategy');

console.log('filtered Strategy Number of Books', filterStrategyBooks.numberOfBooks)
console.log('filtered Strategy Books', filterStrategyBooks.books)
// console.log('filtered Philosophy Books', filterByGenre(bookCollection, 'Philosophy'))
