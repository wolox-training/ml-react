import { connect } from 'react-redux';
import actions from '../../../../../../../../redux/Books/actions'
import {addBooks, startLoading, error} from '../../../../../../../../redux/Books/actions'
import BooksApi from '../../../../../../../../services/BooksApi'
import Books from './present'

const mapStateToProps = state => {
  return {
    books: (state.books.books).filter(book => book[state.filter.filterType].toUpperCase().includes(state.text.searchText.toUpperCase())),
    fetchingBooks: state.books.fetchingBooks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBooks: () => {
      BooksApi.getBooks().then(
        response => dispatch(addBooks(response.data)),
        error => console.log(error)
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
