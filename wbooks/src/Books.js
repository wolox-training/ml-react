import React, { Component } from 'react';
import myData from './books.json';
import defaultBookIcon from './default_book.svg'
import './Books.css';

class Books extends Component {
   constructor(props) {
     super(props);
     this.state = {
       items: myData,
     };
     this.sortByField = this.sortByField.bind(this);
   }

   sortByField(props) {
     var toFilter =  this.state.items;
     var filter = props.filter;
     for (var i = 0; i < toFilter.length -1; i++) {
       var iMin = i;
       for (var j = i+1; j < toFilter.length; j++) {
         var toFilterJ;
         var toFilterImin;
         if (filter == 'title') {
           toFilterJ = (toFilter[j]).title;
           toFilterImin = (toFilter[iMin]).title;
         } else {
           toFilterJ = (toFilter[j]).author;
           toFilterImin = (toFilter[iMin]).author;
         }
         if (toFilterJ < toFilterImin) {
           iMin = j;
         }
       }
       if (iMin != i) {
         var temp = toFilter[i];
         toFilter[i] = toFilter[iMin];
         toFilter[iMin] = temp;
       }
     }
     this.setState({items: toFilter});
   }

   render(){
     let items = this.state.items;
     let filter = this.state.filters;
     return (
       <div className="body">
        {items.map(item =>
          <div className="book">
          {(item.image_url == null) ? (
            <img className="default-book-icon" src={defaultBookIcon} />
          ) : (
            <img className="book-icon" src={item.image_url} />
          )}
            <b className="book-title" >{item.title}</b>
            <p className="book-author" >{item.author}</p>
          </div>)}
       </div>
     );
   }
 }

 export default Books;
