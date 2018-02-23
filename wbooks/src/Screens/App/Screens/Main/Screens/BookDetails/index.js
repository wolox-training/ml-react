import { connect } from 'react-redux';
import {fetchBook, startLoading, addWish} from '../../../../../../redux/BookDetail/actions'
import BooksApi from '../../../../../../services/BooksApi'
import AcountApi from '../../../../../../services/AcountApi'
import BookDetail from './layout'
import moment from 'moment';

const mapStateToProps = state => {
  return {
    book: state.bookDetail.book,
    notFound: state.bookDetail.notFound,
    fetchingBook: state.bookDetail.fetchingBook,
    available: state.bookDetail.available,
    wish: state.bookDetail.wish
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBook: (bookId) => {
      dispatch(fetchBook(bookId))
    },
    onLoading: () => {
      dispatch(startLoading());
    },
    onWish: (bookId) => {
      dispatch(addWish(bookId))
    }
  }
}

const FetchBookDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default FetchBookDetail
