import api from '../config/api';

export default {
  getBooks() {
    return api.get('/books');
  },
  getBook(bookId) {
    return api.get(`/books/${bookId}`)
  },
  getBookRents(bookId) {
    return api.get(`/books/${bookId}/rents`)
  }
}
