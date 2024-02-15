import { books, categories } from "./dados";

class BookService {
 

  getBooks(){
    return books;
  }
  
  getBookById(id){
    return [books.find(book => book.id === id)];
  }

  getCategories(){
    return categories;
  }

  createBook(book){
    books.push(book);
    return book;
  }

  updateBook(id, updatedBook){
    const index = books.findIndex(book => book.id === id);
    if(index === -1) return null;
    books[index] = updatedBook;
    return updatedBook;
  }

  deleteBook(id){
    const index = books.findIndex(book => book.id === id);
    if(index === -1) return null;
    books.splice(index, 1);
    return true;
  }
}

export default new BookService();