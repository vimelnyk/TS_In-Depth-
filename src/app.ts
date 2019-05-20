showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}
 function getAllBooks(): object[] {
   let books: object[] = [
     {
        title: 'Refactoring JavaScript', 
        author: 'Evan Burchard', 
        available: true
       }, 
     {
        title: 'JavaScript Testing', 
        author: 'Liang Yuxian Eugene', 
        available: false 
      }, 
     {
        title: 'CSS Secrets', 
        author: 'Lea Verou', 
        available: true
     }, 
     {
        title: 'Mastering JavaScript Object-Oriented Programming',
        author: 'Andrea Chiarelli',
        available: true 
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

//=================================================
//Task 01

logFirstAvailable(getAllBooks());