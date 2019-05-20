showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}
//---------------------------------------------------------------------
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

 function getAllBooks(): any[] {
   let books: any[] = [
     {
       id: 1,
        title: 'Refactoring JavaScript', 
        author: 'Evan Burchard', 
        available: true,
        category: Category.JavaScript
       }, 
     {
       id: 2,
        title: 'JavaScript Testing', 
        author: 'Liang Yuxian Eugene', 
        available: false ,
       category: Category.JavaScript
      }, 
     {
       id: 3,
        title: 'CSS Secrets', 
        author: 'Lea Verou', 
        available: true,
       category: Category.CSS
     }, 
     {
       id: 4,
        title: 'Mastering JavaScript Object-Oriented Programming',
        author: 'Andrea Chiarelli',
        available: true ,
       category: Category.JavaScript
    }
  ];

  return books;
 }

function logFirstAvailable(books: any[]): void {
  const numberOfBooks: number = books.length;
  let titleFirstAvaliable: string = '';

  for(const book of books){
    if(book.avaliable) {
      titleFirstAvaliable = book.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`Title of First Avaliable Book: ${titleFirstAvaliable}`);

}

function getBookTitlesByCategory(category:  Category): Array<string> {
  const books: any[] = getAllBooks();
  const titles: string[] = [];

  for(const book of books){
    if(book.category===category){
      titles.push(book.title);      
    } 
  }

  return titles;
}

function logBookTitles(titles: string[]): void {
  for(const title of titles) {
    console.log(title);
  }
}

function getBooksByID(id: number): object {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

//=================================================
//Task 01

//logFirstAvailable(getAllBooks());

//Task 02
// const titles: string[] = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

//Task 03
const titles: string[] = getBookTitlesByCategory(Category.JavaScript);
titles.forEach((title: string, index: number) => {
    console.log(`${index} - ${title}`)
  }
);

const book = getBooksByID(10);
console.log(book);

