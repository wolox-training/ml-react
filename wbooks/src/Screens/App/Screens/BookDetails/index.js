import { connect } from 'react-redux';
import {addBook, startLoading, notFound} from '../../../../redux/BookDetail/actions'
import BooksApi from '../../../../services/BooksApi'
import BookDetail from './present'

const mapStateToProps = state => {
  return {
    book: state.bookDetail.book,
    notFound: state.bookDetail.notFound,
    fetchingBook: state.bookDetail.fetchingBook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchBook: (bookId) => {
      dispatch(startLoading);
      BooksApi.getBook(bookId).then((response) => {
        dispatch(addBook(response.data));
      }).catch((error) => {
        if (error.response.status === '400') {
          dispatch(notFound())
        }
      });
    }
  }
}

const FetchBookDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default FetchBookDetail
