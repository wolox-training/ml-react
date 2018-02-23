import { connect } from 'react-redux';
import {addBook, startLoading, notFound, error} from '../../../../../../redux/BookDetail/actions'
import BooksApi from '../../../../../../services/BooksApi'
import BookDetail from './present'

const mapStateToProps = state => {
  return {
    book: state.bookDetail.book,
    notFound: state.bookDetail.notFound,
    fetchingBook: state.bookDetail.fetchingBook
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBook: (bookId) => {
      BooksApi.getBook(bookId).then(
        response => dispatch(addBook(response.data)),
        error => {if (error.response.status == '400') {
          dispatch(notFound())
        } else {
          dispatch(error())
        }
      });
    },
    onLoading: () => {
      dispatch(startLoading());
    }
  }
}

const FetchBookDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default FetchBookDetail
