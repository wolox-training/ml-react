import { connect } from 'react-redux';
import {fetchBook} from '../../../../redux/BookDetail/actions'
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
      dispatch(fetchBook());
    }
  }
}

const FetchBookDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default FetchBookDetail
