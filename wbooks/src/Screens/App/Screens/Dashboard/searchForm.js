import React from 'react'
import search from '../../../../Assets/search.svg';
import { Field, reduxForm } from 'redux-form'


let SearchForm = props => {
  const {handleSubmit} = props;
    return (
      <form  className="nav" onSubmit={handleSubmit}>
        <Field name='filter' className="filter-bar" placeholder="Seleccionar Filtro" component="select">
          <option value="author">Autor</option>
          <option value="title">Titulo</option>
        </Field>
        <div className="search-container">
          <Field name="search" component="input" type="text" placeholder="Buscar..." className="search-bar"/>
          <button className="search-button"><img className="search-icon" src={search} alt="search icon"/></button>
        </div>
      </form>
    )
};

SearchForm = reduxForm({
  form: 'search',
  initialValues: {
    search: "",
    filter: 'author'
  }
})(SearchForm);

export default SearchForm;
