import { connect } from 'react-redux';
import {addBooks, startLoading, errorAction} from '../../../../../../../../redux/Books/actions'
import BooksApi from '../../../../../../../../services/BooksApi'
import Books from './layout'

const mapStateToProps = state => {
  return {
    books: (state.books.books).filter(book => book[state.filter.filterType].toUpperCase().includes(state.text.searchText.toUpperCase())),
    fetchingBooks: state.books.fetchingBooks,
    isLoading: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBooks: () => {
      BooksApi.getBooks().then(
        response => dispatch(addBooks(response.data)),
        error => dispatch(errorAction())
      )
    },
    onLoading: () => {
      dispatch(startLoading());
    }
  }
}

const FetchBooks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)

export default FetchBooks
